import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-images',
  templateUrl: 'modal-images.html',
})
export class ModalImagesPage {
  listaArrayImage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.listaArrayImage = this.navParams.get('listImagesBase64');
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
