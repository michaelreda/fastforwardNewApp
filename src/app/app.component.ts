import { VersionCheckPage } from './../pages/version-check/version-check';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, NavController, NavParams , LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TimerPage } from '../pages/timer/timer';
import { Storage } from '@ionic/storage';
import {Registerform} from '../pages/registerform/registerform';
import { DataService } from '../providers/data-service';
import { Network } from '@ionic-native/network';
@Component({
  templateUrl: 'app.html',
  
  
})


export class MyApp {
 rootPage:any ;
  id;
  timer;
date;
nextpage;
  check;

  connection_error_popup: any;
  constructor(platform: Platform, statusBar: StatusBar, private loadingCtrl: LoadingController, splashScreen: SplashScreen, private store: Storage, private DS: DataService,private network: Network) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    

    });
  
// this.rootPage=TabsPage;}

    store.get('user_id').then((val) => {
      console.log('store', val);
      this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-version?version=1");
      this.DS.load().subscribe(
        data => (this.handelResponse(data))
      );
      if (val == null || val == "") {

        this.rootPage = LoginPage;
      }
      else {
        if (val==324) this.rootPage=TabsPage;
       else this.rootPage = TimerPage;

      }

    });

  }

  ngOnInit() {

    this.network.onDisconnect().subscribe(() => {
      this.connection_error_popup = this.loadingCtrl.create({
        content: "No internet connection !",
        spinner: 'hide'
      });
      this.connection_error_popup.present();
    });
    this.network.onConnect().subscribe(() => {
      this.connection_error_popup.dismiss();
    });
  }

  handelResponse(data) {
    this.check = data.result;
    console.log(this.check);
    if (!this.check) {
      this.rootPage = VersionCheckPage;
      this.store.set('version',"");
    }
    else this.store.set('version',null);
  }
}

