import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook} from '@ionic-native/facebook';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import{Applicants} from'../applicants/applicants';
import {Requestdate} from '../requestdate/requestdate';
import{Registerform} from '../registerform/registerform';
import {TabsPage} from '../tabs/tabs';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    
})
export class HomePage {
  check=true;

  constructor(public navCtrl: NavController,private fb: Facebook,private sharefb:SocialSharing,private DS:DataService,public alertCtrl: AlertController) {


  }

 
nav(us,pw){
/*if(us!=null && pw!=null){
this.DS.seturl("https://walidpc.eu-gb.mybluemix.net/login?user_name="+us+"&password="+pw);
this.DS.load().subscribe(
            data => (this.check=data)
            
        );*/
if(this.check){
this.navCtrl.pop;
this.navCtrl.push(TabsPage);

}/*}
else{

  this.showAlert();
}
}*/

}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'OOPs :(',
      subTitle: 'Wrong Mail or Password',
      buttons: ['OK']
    });
    alert.present();
  }


  login(){
   
    this.fb.login(['email']).then((response)=>{

      alert('Logged in');
     // alert(JSON.stringify(response.authResponse))
    },(error)=>{alert(error)})
 }

  get_details(){
     this.fb.getLoginStatus().then((response)=>{
       if(response.status=='connected'){
       this.fb.api('/'+response.authResponse.userID+'?fields=id,name,gender',[]).then((response)=>{
         alert(JSON.stringify(response))},(error)=>{alert(error)})
     }
        else{
          alert('not logged in');
        }
      
    
    })

 }
  applicantnav(){
    this.navCtrl.push(Applicants);
  }





   logout(){
      this.fb.logout().then((response)=>{

      alert('Logged out');
      alert(JSON.stringify(response.authResponse))
    },(error)=>{alert(error)})



   }






   share(){
     this.sharefb.share("sharing text",null,null,null).then((response)=>{

      //alert('vedio is shared');
      alert(JSON.stringify(response.authResponse))
    },(error)=>{alert(error)})





   }
  reqdate(){
   
    this.navCtrl.push(Requestdate);

  }
  form(){
 this.navCtrl.push(Registerform);


  }


}

