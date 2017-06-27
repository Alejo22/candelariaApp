import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { RutasPage } from '../pages/rutas/rutas';
import { PopOverRutasPage } from '../pages/pop-over-rutas/pop-over-rutas';

import { IonicStorageModule } from '@ionic/storage'

import { DrupalServiceProvider } from '../providers/drupal-service/drupal-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscarQrPage,
    ContactoPage,
    SiteDetailPage,
    ModalImagesPage,
    SitesPage,
    ProfilePage,
    RutasPage,
    PopOverRutasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name : '__siteDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
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
    ProfilePage,
    RutasPage,
    PopOverRutasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrupalServiceProvider
  ]
})
export class AppModule {}
