import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Requestdate } from './requestdate';

@NgModule({
  declarations: [
    Requestdate,
  ],
  imports: [
    IonicPageModule.forChild(Requestdate),
  ],
  exports: [
    Requestdate
  ]
})
export class RequestdateModule {}
