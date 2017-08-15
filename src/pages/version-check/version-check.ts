import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {AboutPage} from '../about/about' ; 
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the VersionCheckPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-version-check',
  templateUrl: 'version-check.html',
})
export class VersionCheckPage {
  check ; 
  constructor(public navCtrl: NavController, public navParams: NavParams,private DS: DataService ,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VersionCheckPage');
    
}

ngOnInit() {
    this.DS.seturl("https://ffserver.eu-gb.mybluemix.net/check-version?version=1");
    this.DS.load().subscribe(
            data => (this.setValue(data))
            
        );
        console.log(this.check); 
       if(this.check){
        this.navCtrl.pop;
        this.navCtrl.push(AboutPage);

        }else {
          this. showAlert() ; 
        }


}
showAlert() {
    let alert = this.alertCtrl.create({
      title: ' ',
      subTitle: 'shit',
      buttons: ['OK']
    });
    alert.present();
  }
setValue (data){
    this.check = data.result ;
    console.log(this.check); 
       if(this.check){
        this.navCtrl.pop;
        this.navCtrl.push(AboutPage);
      }
}

}
