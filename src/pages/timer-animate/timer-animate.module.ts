import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerAnimatePage } from './timer-animate';

@NgModule({
  declarations: [
    TimerAnimatePage,
  ],
  imports: [
    IonicPageModule.forChild(TimerAnimatePage),
  ],
  exports: [
    TimerAnimatePage
  ]
})
export class TimerAnimatePageModule {}
