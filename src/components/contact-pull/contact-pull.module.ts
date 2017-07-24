import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ContactPullComponent } from './contact-pull';

@NgModule({
  declarations: [
    ContactPullComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ContactPullComponent
  ]
})
export class ContactPullComponentModule {}
