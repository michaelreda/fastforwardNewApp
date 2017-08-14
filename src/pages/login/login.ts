import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Registerform } from '../registerform/registerform';
import { TimerPage } from '../timer/timer';
import { Facebook } from '@ionic-native/facebook';
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
  connection_error_popup: any;


  constructor(public navCtrl: NavController, private http: Http, private DS: DataService, public alertCtrl: AlertController, private fb: Facebook, private store: Storage, private network: Network, private loadingCtrl: LoadingController) {

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



  nav(us, pw) {
    this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login?user_email=" + us + "&password=" + pw);
    this.DS.load().subscribe(
      data => (alert(JSON.stringify(data)))
    );
    if (us != null && pw != null) {
      this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login?user_email=" + us + "&password=" + pw);
      this.DS.load().subscribe(
        data => (this.check = data)
      );
      if (this.check.result) {
        this.store.set('user_id', this.check.user_id);
        localStorage.setItem('company_or_not', this.check.company_or_not);
        this.navCtrl.pop;
        this.navCtrl.setRoot(TimerPage);

      }
      else {

        this.store.set('user_id', "");
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


  form() {
    this.navCtrl.push(Registerform);


  }


  get_details() {
    this.loginfacebook();

    this.fb.getLoginStatus().then((responsefb) => {

      this.fb.api('/' + responsefb.authResponse.userID + '?fields=email,name,birthday', []).then((response) => {



        this.setdata(response)

        this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login-fb?user_email=" + this.email);
        this.DS.load().subscribe(
          data => {
            this.check = data;

            //alert(this.check.result);
            // this. store.set('user_id', this.check.user_id);
            //  this.navCtrl.push(TimerPage);
            if (this.check.result === true) {

              localStorage.setItem('company_or_not', this.check.company_or_not);
              this.store.set('user_id', this.check.user_id);
              // this.navCtrl.pop();
              this.navCtrl.setRoot(TimerPage);

            }

            // or register
            else if (this.check.result === false) {

              this.navCtrl.push(Registerform, { name: this.name, email: this.email, age: this.age });



            }
            //alert(this.email+this.check.result+this.fb.getLoginStatus());



          }






        );
      }, (error) => {
alert('aykalm');
         this.fb.api('/' + responsefb.authResponse.userID + '?fields=email,name,birthday', []).then((response) => {


      //this.setdata(response);
alert(JSON.stringify(response));
        this.setdata(response)
        //alert(JSON.stringify(error));
        this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/login-fb?user_email=" + this.email);
        this.DS.load().subscribe(
          data => {
            this.check = data;

            this.store.set('user_id', this.check.user_id);
            //this.navCtrl.push(TimerPage);

            if (this.check.result === true) {
              localStorage.setItem('company_or_not', this.check.company_or_not);
              this.store.set('user_id', this.check.user_id);
              // this.navCtrl.pop();
              this.navCtrl.setRoot(TimerPage);

            }

            // or register
            else if (this.check.result === false) {
              this.navCtrl.push(Registerform, { name: this.name, email: this.email, age: this.age });



            }

          }

        );



<<<<<<< HEAD
       }); }//
    
    );
=======
      }//

      );
>>>>>>> 72239ef9a063f67435fff0fb59f90f449c2f259c

    }
    );



  }


  loginfacebook() {

    this.fb.login(['email', 'user_birthday']).then((response) => {


      // alert(JSON.stringify(response.authResponse))
    }, (error) => { })
  }



  setdata(response) {

    this.name = response.name;
    this.email = response.email;
    this.age = response.birthday;

  }

  forgot_pass() {
    this.alertCtrl.create({
      title: 'Forgot your password?',
      subTitle: 'No problem! Just provide your email and you will receive your password immediately..',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter your email here...',
          type: 'text'
        },
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
            this.http.post("https://ffserver.eu-gb.mybluemix.net/forgot_pass", { email: data.email }).subscribe(data => {

            });

          }
        }
      ]
    }).present();
  }

}
