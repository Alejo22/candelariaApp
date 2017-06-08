import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarQrPage } from './buscar-qr';

@NgModule({
  declarations: [
    BuscarQrPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarQrPage),
  ],
  exports: [
    BuscarQrPage
  ]
})
export class BuscarQrPageModule {}
