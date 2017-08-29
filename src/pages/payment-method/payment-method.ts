import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Http} from '@angular/http';

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
link;
  constructor(private http:Http,private iab: InAppBrowser,public app:App,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  
  }

  

  creditpayment(){
    
    const browser = this.iab.create(this.link);
  }
  ngOnInit() {

    this.http.get("https://ffserver.eu-gb.mybluemix.net/test").subscribe(data => {
      var res = JSON.parse(data['_body']);
     this.link=res.url;
    });


  }
}
