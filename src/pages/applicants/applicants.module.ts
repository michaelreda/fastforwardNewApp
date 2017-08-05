import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Applicants } from './applicants';

@NgModule({
  declarations: [
    Applicants,
  ],
  imports: [
    IonicPageModule.forChild(Applicants),
  ],
  exports: [
    Applicants
  ]
})
export class ApplicantsModule {}
