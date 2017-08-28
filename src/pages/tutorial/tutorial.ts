import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';





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
  ios: boolean = false;

  constructor(public navCtrl: NavController,public plt: Platform) {
    if (plt.is('ios')) {
      this.ios = true;
    }
        this.slides = [
          {
            title: "FIRST SLIDE",
            description: "hi HI",
            image: 'assets/facebook.png',
          },
          {
            title: "Second SLIDE",
            description: "hi HI",
            image: 'assets/facebook.png',
          },
          {
            title: "Third SLIDE",
            description: "hi HI",
            image: 'assets/facebook.png',
          },
        ];
  }

  startApp() {
    this.navCtrl.setRoot(AboutPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    // this.menu.enable(false);
  }


}