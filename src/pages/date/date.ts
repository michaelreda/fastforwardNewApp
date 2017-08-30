import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-date',
  templateUrl: 'date.html',
})
export class DatePage {
today;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePage');
  }

}
