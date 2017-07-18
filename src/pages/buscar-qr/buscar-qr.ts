import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

/**
 * Generated class for the BuscarQrPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buscar-qr',
  templateUrl: 'buscar-qr.html',
})
export class BuscarQrPage {
  result:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public barcode:BarcodeScanner) {
    this.result = {};
    this.scannerQrCode();
  }

  async scannerQrCode(){
    this.result = await this.barcode.scan();
    if(!this.result.cancelled){
      if(this.result.format == "QR_CODE"){
        this.result.text = 'hemos encontrado la url: ' + this.result.text;
      }else{
        this.result.text = 'No hemos encontrado un código de QR';
      }
    }else{
      this.result.text = 'No encontre datos';
    }
  }

}
