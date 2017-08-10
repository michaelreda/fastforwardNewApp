import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';

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
    TimerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    DatePickerModule,
     HttpModule,
     BrowserAnimationsModule,
     IonicStorageModule.forRoot()
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
    TimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    SocialSharing,
    AndroidPermissions,
    DataService,
    User,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
