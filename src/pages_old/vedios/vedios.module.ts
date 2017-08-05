import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Vedios } from './vedios';

@NgModule({
  declarations: [
    Vedios,
  ],
  imports: [
    IonicPageModule.forChild(Vedios),
  ],
  exports: [
    Vedios
  ]
})
export class VediosModule {}
