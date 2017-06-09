import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SitesPage } from '../../pages/sites/sites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  saludo: string = "Hola Alejo";
  nombre:string;
  apellido:string;
  edad:number;

  constructor(public navCtrl: NavController) {

  }

  public goToSites(idSite){
    this.navCtrl.push(SitesPage , {idSite: idSite});
  }

  ionViewDivLoad(){
    console.log('Pagina Cargada');
  }

}
