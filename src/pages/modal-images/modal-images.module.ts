import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalImagesPage } from './modal-images';

@NgModule({
  declarations: [
    ModalImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalImagesPage),
  ],
  exports: [
    ModalImagesPage
  ]
})
export class ModalImagesPageModule {}
