import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Http} from '@angular/http';

/**
 * Generated class for the BrowserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {
link;
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
  }
  browser(){
   
   
    console.log('link',this.link);
    
    const browser = this.iab.create(this.link);
  }
  ngOnInit() {

    this.http.get("https://ffserver.eu-gb.mybluemix.net/test").subscribe(data => {
      var res = JSON.parse(data['_body']);
     this.link=res.url;
    });


  }
}
