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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscarQrPage,
    ContactoPage,
    SiteDetailPage
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
    SiteDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
