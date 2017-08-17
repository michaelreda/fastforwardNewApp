import { VersionCheckPage } from './../pages/version-check/version-check';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TimerPage } from '../pages/timer/timer';

import { Storage } from '@ionic/storage';

import { DataService } from '../providers/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  id;
  timer;
date;
nextpage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private store:Storage,private DS:DataService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      

    });
  //this.rootPage=LoginPage;
    
   
   
  }

  ngOnInit() {

 this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-date?");
        this.DS.load().subscribe(
            data =>{ this.date=data;
            if(this.date.result===true){

             this.timer=true;
              this.store.set('timer','1');
            }
            else{

              this.timer=false;
              this.store.set('timer',"");
            }
            
             this.store.get('user_id').then((val) => {
      console.log('store',val);
      
    if (val== null || val==""){

//this.id = false;
this.setdata(false);
    }
else{

//this.id=true;
  this.setdata(true);        

      }

    });

<<<<<<< HEAD

            });
          
          
          
          }

setdata(id ){
this.id=id;
//console.log('id',this.id,'t',this.timer);
if(this.id==true && this.timer==true) {this.rootPage=TimerPage; }
else if(this.id==true && this.timer==false)this.rootPage=TabsPage;
else if(this.id==false && this.timer==true)this.rootPage=LoginPage;
else if(this.id==false && this.timer==false) this.rootPage=LoginPage;
  //      this.store.get('timer').then((val)=>{console.log(val); })
 
}
=======
  }

  ngOnInit() {


  }

  handelResponse(data) {
    this.check = data.result;
    console.log(this.check);
    if (!this.check) {
      this.rootPage = VersionCheckPage;
    }
  }
>>>>>>> 7db60688e9929c998e88007cac05d3875b5ec3c6
}

