import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';

import { ModalImagesPage } from '../modal-images/modal-images';


@IonicPage()
@Component({
  selector: 'page-site-detail',
  templateUrl: 'site-detail.html',
})
export class SiteDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal:ModalController) {

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

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiteDetailPage');
  }

}
