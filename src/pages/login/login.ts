import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  check;

  constructor(public navCtrl: NavController, public navParams: NavParams,private DS:DataService,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


nav(us,pw){
if(us!=null && pw!=null){
this.DS.seturl("https://walidpc.eu-gb.mybluemix.net/login?user_name="+us+"&password="+pw);
this.DS.load().subscribe(
            data => (this.check=data)
            
        );
if(this.check.result){
this.navCtrl.pop;
this.navCtrl.push(LoginPage);

}
else{

  this.showAlert();
}
}

}

showAlert() {
    let alert = this.alertCtrl.create({
      title: ' ',
      subTitle: ' wrong mail or password',
      buttons: ['OK']
    });
    alert.present();
  }
}
