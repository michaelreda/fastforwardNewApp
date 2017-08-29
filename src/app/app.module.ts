import { TutorialPage } from './../pages/tutorial/tutorial';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Applicants} from '../pages/applicants/applicants';
import {Requestdate} from '../pages/requestdate/requestdate';
import {Registerform} from '../pages/registerform/registerform';
import {Vedios} from '../pages/vedios/vedios';
import {Listcareer} from '../pages/listcareer/listcareer';
import { ItemDetailPage} from '../pages/item-detail/item-detail'
import { Profile } from "../pages/profile/profile";
import {LoginPage  } from "../pages/login/login";
import { TimerPage } from '../pages/timer/timer';
import{DataService} from '../providers/data-service';
import { User } from '../providers/user';
import { AcceptapplicantsPage } from "../pages/acceptapplicants/acceptapplicants";
import { PaymentMethodPage } from '../pages/payment-method/payment-method';
import {ExpotimerPage} from '../pages/expotimer/expotimer';
import { BrowserPage } from "../pages/browser/browser";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Ionic2RatingModule } from 'ionic2-rating';
import { DatePickerModule } from 'datepicker-ionic2';
import {IonicStorageModule} from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafepipePipe } from '../pipes/safepipe/safepipe';
import { CountdownPipe } from '../pipes/countdown/countdown';
import { Network } from '@ionic-native/network';
import {VersionCheckPage} from '../pages/version-check/version-check';
import { RatingPipe } from '../pipes/rating/rating';
import {AngularFireModule} from "angularfire2" ; 
import firebase from "firebase";
 

 var config = {
    apiKey: "AIzaSyDLdE-P0vHPTnxIpnA5-Nm3yFlabOaUE78",
    authDomain: "wello-trial.firebaseapp.com",
    databaseURL: "https://wello-trial.firebaseio.com",
    projectId: "wello-trial",
    storageBucket: "",
    messagingSenderId: "694576382775"
  };
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Applicants,
    Requestdate,
    Vedios,
    Registerform,
    Listcareer,
    ItemDetailPage,
    Profile,
    SafepipePipe,
    LoginPage,
    TimerPage,
    CountdownPipe,
    VersionCheckPage,
    AcceptapplicantsPage,
    RatingPipe,
    TutorialPage,
    PaymentMethodPage,
    ExpotimerPage,
    BrowserPage,
   
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    DatePickerModule,
     HttpModule,
     BrowserAnimationsModule,
     IonicStorageModule.forRoot(),  
     AngularFireModule.initializeApp(config) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Applicants,
    Requestdate,
     Vedios,
    Registerform,
    Listcareer,
    ItemDetailPage,
    Profile,
    LoginPage,
    TimerPage,
    VersionCheckPage,
    AcceptapplicantsPage,
    TutorialPage,
    PaymentMethodPage,
    ExpotimerPage,
    BrowserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    SocialSharing,
    AndroidPermissions,
    DataService,
    User,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network
  ]
})
export class AppModule {}
