import { Component } from '@angular/core';
import { NavController , LoadingController } from 'ionic-angular';
import { SitesPage } from '../../pages/sites/sites';

import { DrupalServiceProvider } from '../../providers/drupal-service/drupal-service';
import {Network} from '@ionic-native/network'

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DrupalServiceProvider]
})

export class HomePage {
  public listItemMenu:any;
  public errorActive:boolean;
  public loading:any;
  public errorMessage: string;


  constructor(public navCtrl: NavController , public ds: DrupalServiceProvider , public loadingCtrl:LoadingController , private network: Network) {
    this.listItemMenu = [];
    this.errorActive = false;
    this.loading = this.loadingCtrl.create({
      content: "Por favor espere..."
    });
    
    this.loading.present();
  }

  public goToSites(menu){
    this.navCtrl.push(SitesPage , {menu: menu});
  }

  ionViewDidLoad(){
   
  }

  showError(errorMessage){
      this.errorMessage = errorMessage;
      this.errorActive = true;
      this.loading.dismiss();
  }

}
