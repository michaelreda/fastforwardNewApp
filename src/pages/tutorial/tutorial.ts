import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';





export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController) {
   
        this.slides = [
          {
            title: "FIRST SLIDE",
            description: "hi HI",
            image: 'assets/facebook.png',
          }
        ];
  }

  startApp() {
    // this.navCtrl.setRoot(WelcomePage, {}, {
    //   animate: true,
    //   direction: 'forward'
    // });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    // this.menu.enable(false);
  }


}