import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
/**
 * Generated class for the Requestdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-requestdate',
  templateUrl: 'requestdate.html',
})
export class Requestdate {
  date:any=[];
  localDate=new Date();
   nowDate=new Date();
   color="color:#32db64";
   dump:any;
    dump1:any;
    formGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService) {
    this.date=[
      {date:"15-07-2017",no:50},
      {date:"01-08-2017",no:20},
      {date:"08-08-2017",no:10},
      {date:"01-09-2017",no:2},
    ];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Requestdate');
  }
setDate(event){
this.nowDate=event;
this.nowDate.setHours(this.nowDate.getHours()+2);

this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/gar?q="+this.nowDate.toISOString());
this.DS.load().subscribe(
            data => (this.dump=data)
            
        );
          this.nowDate.setHours(this.nowDate.getHours()-2);
  console.log("date",this.nowDate);
  
}
 ngOnInit(){
this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/dateso");
this.DS.load().subscribe(
            data => (this.dump1=data)
            
        );



}
}
