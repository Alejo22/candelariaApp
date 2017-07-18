import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandelariaPage } from './candelaria';

@NgModule({
  declarations: [
    CandelariaPage,
  ],
  imports: [
    IonicPageModule.forChild(CandelariaPage),
  ],
  exports: [
    CandelariaPage
  ]
})
export class CandelariaPageModule {}
