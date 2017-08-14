import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimatedPage } from './animated';

@NgModule({
  declarations: [
    AnimatedPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimatedPage),
  ],
  exports: [
    AnimatedPage
  ]
})
export class AnimatedPageModule {}
