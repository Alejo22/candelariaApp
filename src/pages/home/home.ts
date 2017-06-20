import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SitesPage } from '../../pages/sites/sites';

import { DrupalServiceProvider } from '../../providers/drupal-service/drupal-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DrupalServiceProvider]
})

export class HomePage {
  public listItemMenu:any;


  constructor(public navCtrl: NavController , public ds: DrupalServiceProvider) {
    this.listItemMenu = [];
  }

  public goToSites(menu){
    this.navCtrl.push(SitesPage , {menu: menu});
  }

  ionViewDidLoad(){
    this.ds.getMenu().subscribe( menuItem => {
      this.listItemMenu = menuItem;
    });
  }

}
