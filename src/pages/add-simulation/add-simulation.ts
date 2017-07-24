import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

import { Items } from '../../providers/providers';

@Component({
	selector: 'page-add-simulation',
	templateUrl: 'add-simulation.html'
})
export class AddSimulationPage {
	// title:string;
	// type:string;
	// description:string;
	// date:any;
	// photos:any;

	constructor(public navCtrl: NavController, navParams: NavParams, items: Items,public http: Http) {

	}

	add_sim(title,type,price,description,date,images){
		console.log(title);
		console.log(type);
		console.log(price);
		console.log(description);
		console.log(date);
		console.log(images);
		this.http.get("https://walidpc.eu-gb.mybluemix.net/add-simulation?company_id=1&field_id=1&simulation_name="+title+"&price="+price+"&date="+date).subscribe(data => {
			var res = JSON.parse(data['_body']);
			console.log(res);
			//this.loading=false;
		});
	}

}
