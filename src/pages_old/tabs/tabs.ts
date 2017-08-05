import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import{Vedios} from'../vedios/vedios';
import {  Profile} from "../profile/profile";
// import {  UserProfilePage} from "../user-profile/user-profile";
@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = Vedios;
	tab2Root = AboutPage;
	tab3Root=Profile;
	root;
	constructor() {

this.root=this.tab2Root;
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
}
