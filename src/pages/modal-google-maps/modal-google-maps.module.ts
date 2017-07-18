import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalGoogleMapsPage } from './modal-google-maps';

@NgModule({
  declarations: [
    ModalGoogleMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalGoogleMapsPage),
  ],
  exports: [
    ModalGoogleMapsPage
  ]
})
export class ModalGoogleMapsPageModule {}
