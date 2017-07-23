import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SincronizadorPage } from './sincronizador';

@NgModule({
  declarations: [
    SincronizadorPage,
  ],
  imports: [
    IonicPageModule.forChild(SincronizadorPage),
  ],
  exports: [
    SincronizadorPage
  ]
})
export class SincronizadorPageModule {}
