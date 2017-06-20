import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';

import { ModalImagesPage } from '../modal-images/modal-images';
import { DrupalServiceProvider } from '../../providers/drupal-service/drupal-service';

@IonicPage()
@Component({
  selector: 'page-site-detail',
  templateUrl: 'site-detail.html',
  providers: [DrupalServiceProvider]
})

export class SiteDetailPage {

  site:any;
  description:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal:ModalController, public ds:DrupalServiceProvider) {
    this.site = navParams.get('site');
    this.site.images = [];
    this.description = this.site.description.split(".");
  }

  ionViewDidLoad(){
    /*console.log('ionViewDidLoad SiteDetailPage');*/
  }

  openModal(){

    console.log('Show the modal');
    let user = {
      name: 'Alejandro',
      pass: 'Osorio'
    }

    const myModal = this.modal.create(ModalImagesPage , { objUser: user } );
    
    myModal.present();
  }

}
