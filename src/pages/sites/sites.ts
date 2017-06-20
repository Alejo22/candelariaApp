import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SiteDetailPage } from '../site-detail/site-detail';
import { DrupalServiceProvider } from '../../providers/drupal-service/drupal-service';

@IonicPage()
@Component({
  selector: 'page-sites',
  templateUrl: 'sites.html',
  providers: [DrupalServiceProvider]
})


export class SitesPage {
  menu:any;
  listSites:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DrupalServiceProvider) {
    this.menu = this.navParams.get('menu');
    console.log(this.menu);
    this.listSites = [];
  }

  ionViewDidLoad() {
    this.ds.getListSites(this.menu.id).subscribe( sites => {
      this.listSites = sites;
    });
  }

  public goToSiteDescription(site){
    this.navCtrl.push(SiteDetailPage , {site : site});
  }
}