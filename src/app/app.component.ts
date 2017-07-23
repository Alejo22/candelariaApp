import { SQLite , SQLiteObject } from '@ionic-native/sqlite';
import { Component , ViewChild } from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SincronizadorPage } from '../pages/sincronizador/sincronizador'
import { HomePage } from '../pages/home/home';
import { BuscarQrPage } from '../pages/buscar-qr/buscar-qr';
import { CandelariaPage } from '../pages/candelaria/candelaria';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('Navegador') nav: Nav;
  
  public rootPage:any;
  public pages: Array<{ title:string , component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , private sqlite: SQLite) {
    this.rootPage = SincronizadorPage;
    this.pages = [{title: 'Inicio' ,                 component: HomePage ,        icon:"home" },
                  {title: 'Buscar por QR' ,          component: BuscarQrPage ,    icon:"barcode"},
                  {title: 'Mis Favoritos' ,          component: FavoritosPage ,   icon:"heart" } ,
                  {title: 'Sobre la Candelaria' ,    component: CandelariaPage ,  icon:"information-circle" },  
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.initilizeApp();
    });
  }

  initilizeApp(){
    this.sqlite.create({
      name: 'candelariadb',
      location: 'default'
    }).then( (db: SQLiteObject) => {
      db.executeSql('create table if not exists tiposLugar ( id INTEGER PRIMARY KEY AUTOINCREMENT, orden INTEGER, name VARCHAR(15) , idServer integer );', {})
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
    }).catch( error => console.log(error));
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

