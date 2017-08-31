import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {Http} from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
link;
  constructor(platform:Platform,private http:Http,public navCtrl: NavController, public navParams: NavParams) {
  
    platform.ready().then(()=>{
      
              platform.registerBackButtonAction(() =>{
      
                if(this.navCtrl.canGoBack()){
                  this.navCtrl.pop();
                }
              });
      
      
            });
  }
  back_button(){

    this.navCtrl.pop();
  }


  ngOnInit() {

    this.http.get("https://ffserver.eu-gb.mybluemix.net/test").subscribe(data => {
      var res = JSON.parse(data['_body']);
     this.link=res.url;
     console.log('link',this.link);
     
    });


  }
}
