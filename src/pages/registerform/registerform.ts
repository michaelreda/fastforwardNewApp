import { Network } from '@ionic-native/network';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';
import { Facebook} from '@ionic-native/facebook';
import {TabsPage} from '../tabs/tabs'
import {TimerPage} from '../timer/timer'


@IonicPage()
@Component({
  selector: 'page-registerform',
  templateUrl: 'registerform.html',
})
export class Registerform {

  degree="";
  name="";
  email="";
  age="";
  check;
  ios: boolean = false;
  connection_error_popup:any;
  promo_code:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private DS:DataService,private fb: Facebook,public plt: Platform,private network: Network, private loadingCtrl: LoadingController) {

		this.network.onDisconnect().subscribe(() => {
      this.connection_error_popup = this.loadingCtrl.create({
        content: "No internet connection !",
        spinner: 'hide'
      });
      this.connection_error_popup.present();
    });
    this.network.onConnect().subscribe(() => {
      this.connection_error_popup.dismiss();
    }); 

  this.name=navParams.get("name");
  this.age=navParams.get("age");
  this.email=navParams.get("email");
  //alert(this.name+this.age+this.email);
  if (plt.is('ios')) {
			this.ios = true;
		}
  }

 
  register(pass,school,phone)
  {
    console.log("register");
    console.log(this.promo_code)
    
if(this.name!="" &&this.email!="" && pass!="" && school!="" && this.age!="" &&phone!=""){
console.log("not null");


this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/register2?password="+pass+"&user_name"+this.name+"&degree="+this.degree+"&user_email="+this.email+"&school="+school+"&phone_no="+phone+"&age="+this.age+"&promo_code="+this.promo_code);  
this.DS.load().subscribe(
            data => (this.setresponse(data))
            
        );

}

else{

this.showAlert("Fill all information please");

}


  }
showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: ' ',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  setresponse(value){

this.check=value;

if(this.check.result == false){
this.showAlert(this.check.msg);

}
else if(this.check.result==true){
this.navCtrl.pop();
this.navCtrl.setRoot(TimerPage);

}
  }


get_details(){
  this.loginfacebook();
     this.fb.getLoginStatus().then((response)=>{
      
       this.fb.api('/'+response.authResponse.userID+'?fields=email,name,birthday',[]).then((response)=>{
         alert(this.setdata(response))},(error)=>{});}
    )

 }


  loginfacebook(){
   
    this.fb.login(['email','user_birthday']).then((response)=>{

      //alert('Logged in');
     // alert(JSON.stringify(response.authResponse))
    },(error)=>{alert(JSON.stringify(error))})
 }

 

 setdata(response){

this.name=response.name;
this.email=response.email;
this.age=response.birthday;


 }

}
