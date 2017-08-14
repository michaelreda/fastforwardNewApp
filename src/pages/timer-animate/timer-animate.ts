import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DataService} from '../../providers/data-service';
import {Observable} from 'rxjs/Rx';
/**
/**
 * Generated class for the TimerAnimatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timer-animate',
  templateUrl: 'timer-animate.html',
})
export class TimerAnimatePage {


  
check:any;

StartDate;
nowDate=new Date();
diffDays;
diffhours;
diffmins;
diffsecs;


  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService) {
  
  }

ngOnInit() {

 this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-date?");
        this.DS.load().subscribe(
            data =>{ this.check=data;
            this.StartDate=new Date(this.check.dead_line);
          console.log('date',this.StartDate);
          this.StartDate.setMilliseconds(0);
          console.log(this.check.dead_line);
          
          });
    
            
/*
    this.nowDate.setDate(20);
    this.nowDate.setHours(13);
    this.nowDate.setMinutes(0);
    this.nowDate.setSeconds(0);*/
    Observable.interval(1000 ).subscribe(x => {
      this.timercal();
  });

}
timercal(){
let dump =new Date();
var timeDiff = Math.abs(this.StartDate.getTime() - dump.getTime());
   this. diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));  
   this. diffhours = Math.floor((timeDiff-this.diffDays*1000*3600*24)/(1000*3600)) ; 
   this.diffmins= Math.floor(((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600) /(1000 * 60) ) ;
   this. diffsecs= Math.floor((((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600)- this.diffmins*1000 * 60) /(1000));
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerAnimatePage');
  }

}
