import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from  '@angular/http';
/**
 * Generated class for the AdminProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-admin-profile',
	templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {
	name:string;
	location:string;
	description:string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
		http.get("https://walidpc.eu-gb.mybluemix.net/company_details?company_id=1").subscribe(data => {
			var res = JSON.parse(data['_body']);
			console.log(res);
			this.name=res.company_name;
			this.location=res.location;
			this.description=res.description;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AdminProfilePage');
	}


		edit_profile(){
			console.log(this.name);
			console.log(this.location);
			console.log(this.description);
			// console.log(profile_pic);
			// console.log(cover_pic);
			// this.http.get("https://walidpc.eu-gb.mybluemix.net/add-simulation?company_id=1&field_id=1&simulation_name="+title+"&price="+price+"&date="+date).subscribe(data => {
			// 	var res = JSON.parse(data['_body']);
			// 	console.log(res);
			// 	//this.loading=false;
			// });
		}

}
