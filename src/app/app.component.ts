import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{HomePage} from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {TimerPage} from '../pages/timer/timer';

import { Storage } from '@ionic/storage';
import { TimerAnimatePage } from '../pages/timer-animate/timer-animate';

import {DataService} from '../providers/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
date;
nextpage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private store:Storage,private DS:DataService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  //  this.rootPage=TimerPage;
    
   
    store.get('user_id').then((val) => {
      console.log('store',val);
      
    if (val== null || val==""){

this.rootPage = LoginPage;
    }
else{

this.rootPage=TimerPage;

}
    
  });

  }

  ngOnInit() {
/*
 this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-date?");
        this.DS.load().subscribe(
            data =>{ this.date=data;
            if(this.date.result===true){

             this.nextpage=TimerPage;
            }
            else{

              this.nextpage=TabsPage;
            }
            });
          
          
          
          */}

}
