import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {VersionCheckPage} from '../version-check/version-check';
import {Listcareer} from '../listcareer/listcareer';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
	 animations: [
		trigger('myvisibility', [
			state('visible', style({
				opacity: 1
			})),
			state('invisible', style({
				opacity: 0
			})),
			transition('* => *', animate('.5s'))
		])
	]
})
export class AboutPage {
	check ; 
	 visibleState = 'visible';
public fields:any[];
	constructor(public navCtrl: NavController,private DS: DataService) {

this.fields=[
	{name:"MARKETING",img:"assets/mktgx.png",id:1},
	{name:"SOFTWARE ENGINEERING",img:"assets/finalsoft.png",id:2},
	{name:"ARCHITECTURE",img:"assets/archx.png",id:3},
	{name:"BANKING",img:"assets/bankx.png",id:4},
	{name:"TV PRODUCTION",img:"assets/tvx.png",id:5},
	{name:"FASHION DESIGN",img:"assets/fashx.png",id:6},
	{name:"JOURNALISM",img:"assets/journx.png",id:7},
	{name:"INDUSTRIAL",img:"assets/indx.png",id:7},
];


}

ngOnInit() {
    this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-version?version=1");
    this.DS.load().subscribe(
            data => (this.handelResponse(data))
            
        );
	  }


handelResponse (data){
    this.check = data.result ;
    console.log(this.check); 
       if(!this.check){
        this.navCtrl.push(VersionCheckPage);
      }
}
nav(img,id){

this.navCtrl.push(Listcareer,{img:img,id:id});

}
toggleVisible() {
		this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
	}
}
