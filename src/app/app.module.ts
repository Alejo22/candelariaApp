import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuscarQrPage } from '../pages/buscar-qr/buscar-qr';
import { ContactoPage } from '../pages/contacto/contacto';
import { SiteDetailPage } from '../pages/site-detail/site-detail';
import { ModalImagesPage } from '../pages/modal-images/modal-images';
import { SitesPage } from '../pages/sites/sites';
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscarQrPage,
    ContactoPage,
    SiteDetailPage,
    ModalImagesPage,
    SitesPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuscarQrPage,
    ContactoPage,
    SiteDetailPage,
    ModalImagesPage,
    SitesPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
