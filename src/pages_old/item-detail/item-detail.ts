import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {  Requestdate } from "../requestdate/requestdate";
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
	read_more=[];
	follow="Follow";
companyid=3;
	constructor(public navCtrl: NavController, navParams: NavParams, http: Http, public alertCtrl:AlertController,public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController) {

		//this.loading=true;
	this.companyid=navParams.get("co_id");
	//	this.presentLoading();
		http.get("https://walidpc.eu-gb.mybluemix.net/company_details?company_id="+this.companyid).subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_details=res;
			console.log(this.company_details);
			//this.loader.dismiss();
			// this.loading=false;
		});
		http.get("https://walidpc.eu-gb.mybluemix.net/get_company_simulations?company_id="+this.companyid).subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_simulations =res;
			for (let entry of this.read_more) {
				entry=false;
			}
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
						placeholder: 'Enter your message here...',
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

		presentActionSheet() {
			let actionSheet = this.actionSheetCtrl.create({
				// title: '',
				buttons: [
					{
						text: '17 Jan, 11:00 AM',
						handler: () => {
							console.log('17 Jan, 11:00 AM');
						}
					},
					{
						text: '20 Feb, 7:300 AM',
						handler: () => {
							console.log('20 Feb, 7:300 AM');
						}
					},
					{
						text: 'Request new Time',
						role: 'destructive',
						handler: () => {
						this.navCtrl.push(Requestdate);
						}
					},
					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				]
			});

			actionSheet.present();
		}


		// read_more(i){
		// 	// console.log(i);
		// 	// document.getElementsById("more_text_"+i).style.display = 'block';
		// 	// document.getElementsById("read_more_"+i).style.display = 'none';
		// }

}
