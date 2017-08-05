import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {  Requestdate } from "../requestdate/requestdate";
import {Http} from '@angular/http';



@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class Profile {

	user_info:any={};
	user_simulations:any=[];
	refresher:any;

	constructor(public navCtrl: NavController, navParams: NavParams, http: Http, public alertCtrl:AlertController,public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController) {
		http.get("https://walidpc.eu-gb.mybluemix.net/user_info?id=36").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.user_info=res;
			console.log(this.user_info);
			//this.loading=false;
		});

		http.get("https://walidpc.eu-gb.mybluemix.net/user_simulations?id=36").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.user_simulations=res;
			console.log(this.user_simulations);
			// this.loading=false;
		});
	}


		showHead(refresher) {
			this.refresher=refresher;
			setTimeout(() => {
				refresher.complete();
			}, 5000);
		}
		hideHead(){
			if(this.refresher)
				this.refresher.complete();
		}



}
