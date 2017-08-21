import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import {  Requestdate } from "../requestdate/requestdate";
import {Http} from '@angular/http';
import { Storage } from '@ionic/storage';


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
userid;
	constructor( private store:Storage,public navCtrl: NavController, navParams: NavParams, private http: Http, public alertCtrl:AlertController,public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController) {
	//this.loading=true;
	this.companyid=navParams.get("co_id");
	//	this.presentLoading();
	
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

		presentActionSheet(x) {
			let actionSheet = this.actionSheetCtrl.create({
				// title: '',
				buttons: [
				
					
					{
						text: 'Cancel',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				]
			});
			
			x.dates.forEach(element => {
				actionSheet.addButton({text:element.date,
				handler:()=>{
				this.showalert(element.date_id,x);
				}})
			});
			actionSheet.present();
		}


showalert(y,x){

	this.http.get("https://ffserver.eu-gb.mybluemix.net/apply?user_id="+this.userid+"&simulation_date_id="+y).subscribe(
		data => {
			var res = JSON.parse(data['_body']);
          	x.status=res.result;

	});
}
	


		ngOnInit() {
			//console.log('timer page');
			
		  this.store.get('user_id').then((val) => {
		  this.setid(val);
		  this.http.get("https://ffserver.eu-gb.mybluemix.net/company_details?company_id="+this.companyid).subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_details=res;
			console.log(this.company_details);
			//this.loader.dismiss();
			// this.loading=false;
		});
		this.http.get("https://ffserver.eu-gb.mybluemix.net/get_company_simulations2?company_id="+this.companyid+"&user_id="+this.userid).subscribe(data => {
			var res = JSON.parse(data['_body']);
			this.company_simulations =res;
			for (let entry of this.read_more) {
				entry=false;
			}
			console.log(this.company_simulations);
			// this.loading=false;
		});
		  
		  
		  });
					  
		}

		setid(val){

        this.userid=val;

		}
}
