import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import{Registerform} from '../registerform/registerform';
import { Facebook} from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  check;
  splash = true;
  name;
  email;
  age; 




  constructor(public navCtrl: NavController,private DS:DataService,public alertCtrl: AlertController,private fb: Facebook) {
  }

 //new 
ionViewDidLoad() {
    //this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
    //  this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

 

nav(us,pw){
if(us!=null && pw!=null){
this.DS.seturl("https://walidpc.eu-gb.mybluemix.net/login?user_name="+us+"&password="+pw);
this.DS.load().subscribe(
            data => (this.check=data)
            
        );
if(this.check.result){
this.navCtrl.pop;
this.navCtrl.push(TabsPage);

}
else{

  this.showAlert();
}
}

}

showAlert() {
    let alert = this.alertCtrl.create({
      title: ' ',
      subTitle: ' wrong mail or password',
      buttons: ['OK']
    });
    alert.present();
  }


 form(){
 this.navCtrl.push(Registerform);


  }


get_details(){
  this.loginfacebook();
     this.fb.getLoginStatus().then((response)=>{
       if(response.status=='connected'){
       this.fb.api('/'+response.authResponse.userID+'?fields=email,name,birthday',[]).then((response)=>{
         alert(this.setdata(response))},(error)=>{alert(error)});
     }
        else{
          alert('not logged in');
        }
      
    
    })

 }


  loginfacebook(){
   
    this.fb.login(['email','user_birthday']).then((response)=>{

      //alert('Logged in');
     // alert(JSON.stringify(response.authResponse))
    },(error)=>{alert(error)})
 }

 

 setdata(response){

this.name=response.name;
this.email=response.email;
this.age=response.birthday;

this.navCtrl.push(Registerform,{name:this.name,email:this.email,birthday:this.age});
 }


}
