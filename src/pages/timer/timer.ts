import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import {TabsPage} from '../tabs/tabs';
import {DataService} from '../../providers/data-service';
import {Observable} from 'rxjs/Rx';
=======
import { DataService } from '../../providers/data-service';
import { Observable } from 'rxjs/Rx';
>>>>>>> 7db60688e9929c998e88007cac05d3875b5ec3c6

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
  check: any;

  StartDate;
  nowDate = new Date();
  diffDays;
  diffhours;
  diffmins;
  diffsecs;

  price: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService) {
  
 
  }
ngOnInit() {

//price

this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/get-ticket-price?user_id=2");
        this.DS.load().subscribe(
            data =>{ this.price=data.result;
          });
        


//date
 this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-date?");
        this.DS.load().subscribe(
            data =>{ this.check=data;
            this.StartDate=new Date(this.check.dead_line);
          console.log('date',this.StartDate);
          this.StartDate.setMilliseconds(0);
          console.log(this.check.dead_line);
          
          });
        
       
       
    Observable.interval(1000 ).subscribe(x => {
      this.timercal();
  });

}
  timercal(){
let dump =new Date();
dump.getTimezoneOffset();
//console.log('dump',dump);
var timeDiff = Math.abs(this.StartDate.getTime() - dump.getTime());
   this. diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));  
   this. diffhours = Math.floor((timeDiff-this.diffDays*1000*3600*24)/(1000*3600)) ; 
   this.diffmins= Math.floor(((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600) /(1000 * 60) ) ;
   this. diffsecs= Math.floor((((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600)- this.diffmins*1000 * 60) /(1000));

  let m=  Math.floor((timeDiff/1000));
  //console.log('m',m);
  
if(m==0){
  console.log('tabs');
  
//this.navCtrl.popToRoot();
this.navCtrl.setRoot(TabsPage);
}


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }







}
