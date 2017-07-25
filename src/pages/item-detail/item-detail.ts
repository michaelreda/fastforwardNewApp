import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Items } from '../../providers/providers';
import {Http} from '@angular/http';



@Component({
	selector: 'page-item-detail',
	templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
	item: any;
	loading: boolean;
	company_details: any ={};
	company_simulations: any =[];
	refresher:any;
	loader:any={};

	constructor(public navCtrl: NavController, navParams: NavParams, items: Items, http: Http, public alertCtrl:AlertController,public loadingCtrl: LoadingController) {
		this.item = navParams.get('item') || items.defaultItem;
		this.loading=true;

		this.presentLoading();
		http.get("https://walidpc.eu-gb.mybluemix.net/company_details?company_id=1").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_details=res;
			console.log(this.company_details);
			this.loader.dismiss();
			// this.loading=false;
		});
		http.get("https://walidpc.eu-gb.mybluemix.net/get_company_simulations?company_id=1").subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_simulations =res;
			console.log(this.company_simulations);
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

		open_email_content_popup(){
			let alert = this.alertCtrl.create({
				title: 'Message',
				inputs: [
					{
						name: 'message',
						placeholder: 'enter your message here',
						type: 'text'
					}
				],
				buttons: [
					{
						text: 'Cancel',
						role: 'cancel',
						handler: data => {
							console.log('Cancel clicked');
						}
					},
					{
						text: 'Send',
						handler: data => {
							console.log(data.message);
						}
					}
				]
			});
			alert.present();
		}


		presentLoading() {
			this.loader = this.loadingCtrl.create({
				content: "Please wait..."
			});
			this.loader.present();
		}
}
