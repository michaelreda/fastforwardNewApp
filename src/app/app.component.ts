import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{HomePage} from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {TimerPage} from '../pages/timer/timer';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private store:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
   // this.rootPage=TimerPage;
    
   
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
}
