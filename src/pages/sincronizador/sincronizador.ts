import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController  } from 'ionic-angular';

/**
 * Generated class for the SincronizadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sincronizador',
  templateUrl: 'sincronizador.html',
})
export class SincronizadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.swipeEnable(false);
  }

  /*ionViewDidLoad() {
     if( this.network.type == "wifi"  || this.network.type == "4g" || this.network.type == "3g" || this.network.type == null ){
        this.ds.getMenu().subscribe( 
            menuItem => {
                this.listItemMenu = menuItem;
                this.loading.dismiss();
            }, error => this.showError("Estamos experimentando problemas con el servidor")
        );
    }else{
      this.showError("No hemos detectado una conexion de red");
    }
  }*/

}
