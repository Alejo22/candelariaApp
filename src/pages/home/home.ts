import { Component } from '@angular/core';
import { NavController , LoadingController } from 'ionic-angular';
import { SitesPage } from '../../pages/sites/sites';

import { DrupalServiceProvider } from '../../providers/drupal-service/drupal-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DrupalServiceProvider]
})

export class HomePage {
  public listItemMenu:any;
  public errorActive:boolean;
  public loading:any;


  constructor(public navCtrl: NavController , public ds: DrupalServiceProvider , public loadingCtrl:LoadingController) {
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
    this.ds.getMenu().subscribe( menuItem => {
      this.listItemMenu = menuItem;
      this.loading.dismiss();
    } , error => {
      this.errorActive = true;
      console.log(error.status + ' ' + error );
      this.loading.dismiss();
    });
  }

}
