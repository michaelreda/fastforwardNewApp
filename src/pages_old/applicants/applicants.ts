import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Applicants page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-applicants',
  templateUrl: 'applicants.html',
})
export class Applicants {

  applicants:any=[];
  rate=3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.applicants=[{name:"Adel",age:19,school:"Helwan university", rating:3 },
    {name:"Mariem",age:17,school:"El-Azhr High school", rating:2},
    {name:"Ahmed",age:21,school:"Ein-Shams university", rating:5 },
    {name:"Noha",age:18,school:"Ahmed Zewail High school", rating:4 },
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Applicants');
  }


  accepted(){


    
  }
}
