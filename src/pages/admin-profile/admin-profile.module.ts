import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProfilePage } from './admin-profile';

@NgModule({
  declarations: [
    AdminProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProfilePage),
  ],
  exports: [
    AdminProfilePage
  ]
})
export class AdminProfilePageModule {}
