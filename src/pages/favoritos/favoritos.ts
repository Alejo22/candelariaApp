import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage } from '@ionic/storage'

import { SiteDetailPage } from '../site-detail/site-detail';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  public favoritosToShow:boolean;
  public favoritos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.favoritos = [];
    this.favoritosToShow = false;
    storage.get('favoritos')
    .then((result) => {
      if(result != null && result != undefined){
        this.favoritos = result;
        this.favoritosToShow = true;
        console.log("ya tienes favoritos");
      }
    })
    .catch(() => {
      this.favoritosToShow = false;
    })
  }

  public goToSiteDescription(site){
    this.navCtrl.push(SiteDetailPage , {site : site});
  }

}
