import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import{Vedios} from'../vedios/vedios';
import {  Profile} from "../profile/profile";
import { ActionSheetController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Http} from '@angular/http';


// import {  UserProfilePage} from "../user-profile/user-profile";
@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = AboutPage;
	tab2Root = Vedios;
	tab3Root = Profile;

	root;
	constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, navParams: NavParams,public alertCtrl:AlertController,public http: Http) {
		this.root=this.tab1Root;
	}
	switch1(){
			this.root=this.tab1Root;
	}
	switch2(){
		this.root=this.tab2Root;
	}
	switch3(){
			this.root=this.tab3Root;
	}
	switch4(){
			this.presentAdminActionSheet();
	}

	presentAdminActionSheet() {
		let actionSheet = this.actionSheetCtrl.create({
			// title: '',
			buttons: [
				{
					text: 'Add Simulation',
					handler: () => {
						console.log('17 Jan, 11:00 AM');
					}
				},
				{
					text: 'Edit Profile',
					handler: () => {
						console.log('20 Feb, 7:300 AM');
					}
				},
				{
					text: 'Add Video',
					handler: () => {
							this.show_add_video_popup();
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

	show_add_video_popup(){
		let alert = this.alertCtrl.create({
			title: 'Add video to your media feed',
			inputs: [
				{
					name: 'video_link',
					placeholder: 'Enter youtube or facebook link here...',
					type: 'text'
				},
				{
					name: 'video_description',
					placeholder: 'Enter video description here...',
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
					text: 'Add',
					handler: data => {
					var video = {
						"video_link":data.video_link,
						"description":data.video_description,
						"company_id":"5"
					}
					console.log(data.video_link);
					this.http.post("https://ffserver.eu-gb.mybluemix.net/add-video",video).subscribe(data => {
						var res = JSON.parse(data['_body']);
						// this.user_simulations=res;
						console.log(res);
						// this.loading=false;
					});

					}
				}
			]
		});
		alert.present();
	}
}
