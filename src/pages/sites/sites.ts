import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , PopoverController } from 'ionic-angular';

import { SiteDetailPage } from '../site-detail/site-detail';
import { PopOverRutasPage } from '../pop-over-rutas/pop-over-rutas';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DrupalServiceProvider , public popoverCtrl:PopoverController) {
    this.menu = this.navParams.get('menu');
    this.listSites = [];
  }

  ionViewDidLoad() {
    this.ds.getListSites(this.menu.id).subscribe( sites => {
      this.listSites = sites;
    });
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopOverRutasPage);
    popover.present();
  }

  public goToSiteDescription(site){
    this.navCtrl.push(SiteDetailPage , {site : site});
  }

}