import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';
import { SincronizadorPage  } from '../pages/sincronizador/sincronizador';
import { HomePage } from '../pages/home/home';
import { SitesPage } from '../pages/sites/sites';
import { SiteDetailPage } from '../pages/site-detail/site-detail';
import { ModalImagesPage } from '../pages/modal-images/modal-images';
import { ModalGoogleMapsPage } from '../pages/modal-google-maps/modal-google-maps';
import { BuscarQrPage } from '../pages/buscar-qr/buscar-qr';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { CandelariaPage } from '../pages/candelaria/candelaria';

//Providers
import { DrupalServiceProvider } from '../providers/drupal-service/drupal-service';
import { IonicStorageModule } from '@ionic/storage'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Network } from '@ionic-native/network'
import { SQLite , SQLiteObject} from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    SincronizadorPage,
    HomePage,
    BuscarQrPage,
    SiteDetailPage,
    ModalImagesPage,
    SitesPage,
    ModalGoogleMapsPage,
    FavoritosPage,
    CandelariaPage
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
    SincronizadorPage,
    HomePage,
    BuscarQrPage,
    SiteDetailPage,
    ModalImagesPage,
    SitesPage,
    ModalGoogleMapsPage,
    FavoritosPage,
    CandelariaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrupalServiceProvider,
    BarcodeScanner,
    Network,
    SQLite
  ]
})
export class AppModule {}
