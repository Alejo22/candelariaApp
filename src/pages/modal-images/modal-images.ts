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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let user = this.navParams.get('objUser');
    console.log(user);
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalImagesPage');
  }

}
