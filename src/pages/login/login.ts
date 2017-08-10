import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import{Registerform} from '../registerform/registerform';
import {TimerPage} from '../timer/timer';
import { Facebook} from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

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

  storage;




  constructor(public navCtrl: NavController,private DS:DataService,public alertCtrl: AlertController,private fb: Facebook,private store: Storage) {
     // set a key/value
 /* store.set('user_id', 1);

  // Or to get a key/value pair
  store.get('user_id').then((val) => {
    this.storage=val;
    
  });*/
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
this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login?user_email="+us+"&password="+pw);
this.DS.load().subscribe(
            data => (this.check=data)
            
        );
if(this.check.result){
   this. store.set('user_id', this.check.user_id);
this.navCtrl.pop;
this.navCtrl.push(TabsPage);

}
else{

   this. store.set('user_id',"");
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
    this.fb.getLoginStatus().then((responsefb)=>{
      
        this.fb.api('/'+responsefb.authResponse.userID+'?fields=email,name,birthday',[]).then((response)=>{



         this.setdata(response)
            
        this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login-fb?user_email="+this.email);
        this.DS.load().subscribe(
            data =>{ this.check=data;
            
            
            if (this.check.result===true){

   this. store.set('user_id', this.check.user_id);
            this.navCtrl.push(TabsPage);

            }

            // or register
            else if(this.check.result===false){
              
              this.navCtrl.push(Registerform,{name:this.name,email:this.email,age:this.age});
            


            }
            //alert(this.email+this.check.result+this.fb.getLoginStatus());
            
            
            
            }

          


          
            
        );
        },(error)=>{

        this.setdata(error)
            
        this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login-fb?user_email="+this.email);
        this.DS.load().subscribe(
            data =>{ this.check=data;
            
            
            if (this.check.result===true){

   this. store.set('user_id', this.check.user_id);
            this.navCtrl.push(TabsPage);

            }

            // or register
            else if(this.check.result===false){
              this.navCtrl.push(Registerform,{name:this.name,email:this.email,age:this.age});
            


            }
           
            
            
            
            }

          


          
            
        );



        });
    
        }
     
      
    
    );



 }


  loginfacebook(){
   
    this.fb.login(['email','user_birthday']).then((response)=>{

     
     // alert(JSON.stringify(response.authResponse))
    },(error)=>{})
 }

 

 setdata(response){

this.name=response.name;
this.email=response.email;
this.age=response.birthday;

}


}
