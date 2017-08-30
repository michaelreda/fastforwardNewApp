import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
link;
  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  

  ngOnInit() {

    this.http.get("https://ffserver.eu-gb.mybluemix.net/test").subscribe(data => {
      var res = JSON.parse(data['_body']);
     this.link=res.url;
    });


  }
}
