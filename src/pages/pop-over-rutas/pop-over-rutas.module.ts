import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopOverRutasPage } from './pop-over-rutas';

@NgModule({
  declarations: [
    PopOverRutasPage,
  ],
  imports: [
    IonicPageModule.forChild(PopOverRutasPage),
  ],
  exports: [
    PopOverRutasPage
  ]
})
export class PopOverRutasPageModule {}
