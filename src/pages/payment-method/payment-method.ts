import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }


}
