import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {DataService} from '../../providers/data-service';
import {Observable} from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { VersionCheckPage } from '../version-check/version-check';


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
  user_id;
  price: any;
timer;
  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService, private store: Storage) {
  
 
  }
  setprice(data){

    this.price=data.price;
   // alert('price'+this.price);
  }

setid(id){

  this.user_id=id;
  //alert('id'+this.user_id);

}

ngOnInit() {
  console.log('timer page');
  
this.store.get('user_id').then((val) => {
this.setid(val);

  
this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/get-ticket-price?user_id="+this.user_id);
this.DS.load().subscribe(
    data =>( this.setprice(data)));



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
        
       
       
  this.timer=  Observable.interval(1000 ).subscribe(x => {
      this.timercal();
  });



}
  timercal(){
let dump =new Date();
dump.getTimezoneOffset();
//console.log('dump',dump);
let diff=this.StartDate.getTime() - dump.getTime();
var timeDiff = Math.abs(diff);
   this. diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));  
   this. diffhours = Math.floor((timeDiff-this.diffDays*1000*3600*24)/(1000*3600)) ; 
   this.diffmins= Math.floor(((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600) /(1000 * 60) ) ;
   this. diffsecs= Math.floor((((timeDiff-this.diffDays*1000*3600*24)-this.diffhours*1000*3600)- this.diffmins*1000 * 60) /(1000));

  let m=  Math.floor((diff/1000));
  //console.log('m',m);
  
if(m <=0){
  console.log('tabs');
  this.timer.unsubscribe();
//this.navCtrl.popToRoot();

this.store.get('version').then((val)=>{
if(val=="")this.navCtrl.setRoot(VersionCheckPage);
else this.navCtrl.setRoot(TabsPage);
});

}


}

 





}
