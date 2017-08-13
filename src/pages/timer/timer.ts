import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {Observable} from 'rxjs/Rx';

/**
 * Generated class for the TimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
check:any;

StartDate;
nowDate=new Date();
diffDays;
diffhours;
diffmins;
diffsecs;

  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService) {
 this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-date?");
        this.DS.load().subscribe(
            data =>{ this.check=data;
            this.StartDate=new Date(this.check.dead_line);
          console.log('date',this.StartDate);
          this.StartDate.setMilliseconds(0);
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

    
/*
this.StartDate.setSeconds( this.nowDate.getSeconds()-dump.getSeconds());

this.StartDate.setMinutes(this.nowDate.getMinutes()-dump.getMinutes());
this.StartDate.setHours(this.nowDate.getHours()- dump.getHours());
this.StartDate.setDate( this.nowDate.getDate()-dump.getDate());

this.StartDate.setMonth( this.nowDate.getMonth()-dump.getMonth());
 //this.StartDate.setSeconds(this.StartDate.getSeconds()-1);
 //if(this.StartDate.getSeconds()==0){

 //}
*/
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }






  
}
