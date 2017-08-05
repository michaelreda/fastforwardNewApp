import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listcareer } from './listcareer';

@NgModule({
  declarations: [
    Listcareer,
  ],
  imports: [
    IonicPageModule.forChild(Listcareer),
  ],
  exports: [
    Listcareer
  ]
})
export class ListcareerModule {}
