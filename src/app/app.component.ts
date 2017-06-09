import { Component , ViewChild } from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BuscarQrPage } from '../pages/buscar-qr/buscar-qr';
import { ContactoPage } from '../pages/contacto/contacto';
import { SiteDetailPage } from '../pages/site-detail/site-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('Navegador') nav: Nav;
  public rootPage:any;
  public pages: Array<{ title:string , component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = HomePage;
    this.pages = [{title: 'Inicio' ,          component: HomePage ,     icon:"home" },
                  {title: 'Buscar por QR' ,   component: BuscarQrPage , icon:"barcode"},
                  {title: 'Contactanos' ,     component: ContactoPage , icon:"chatbubbles" } ,
                  {title: 'Detalle' ,         component: SiteDetailPage , icon:"glasses" }  
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.push(page);
  }
}

