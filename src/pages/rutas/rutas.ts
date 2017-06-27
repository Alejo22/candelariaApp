import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import {Storage } from '@ionic/storage'

/**
 * Generated class for the RutasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
  public rutasToShow:boolean;
  public rutas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    this.rutas = [];
    this.rutasToShow = false;
    storage.get('rutas')
    .then((val) => {
      if(val != null && val != undefined){
        console.log(val);
        this.rutas = val;
        this.rutasToShow = true;
      }
    })
    .catch(val => this.rutasToShow = false);
  }

  crearRuta(){
    this.showPrompt();
  }

  limpiarRuta(){
     this.storage.set('rutas', undefined);
     this.navCtrl.setRoot(RutasPage);
  }


  //funciones par administracion
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Nueva Ruta',
      message: "Crea diferentes rutas con el fin de planear tu aventura",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre de la ruta'
        },
        {
          name: 'description',
          placeholder: 'Describe tu ruta'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Crear',
          handler: data => {
            var ruta = {
              name: data.name,
              description: data.description,
              puntos: []
            }

             this.rutas.push(ruta);
             this.storage.set('rutas', this.rutas);
             this.rutasToShow = true;
          }
        }
      ]
    });

    prompt.present();
  }

}
