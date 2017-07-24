import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-user-profile',
	templateUrl: 'user-profile.html',
})
export class UserProfilePage {
	user_info:any={};
	user_simulations:any={};

	constructor(public navCtrl: NavController, public navParams: NavParams,http: Http) {
		http.get("https://walidpc.eu-gb.mybluemix.net/user_info?id=8").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.user_info=res;
			console.log(this.user_info);
			//this.loading=false;
		});

		http.get("https://walidpc.eu-gb.mybluemix.net/user_simulations?id=1").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.user_simulations=res;
			console.log(this.user_simulations);
			// this.loading=false;
		});

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserProfilePage');
	}

}
