import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  public createUser(){
    this.nombre = "Alejandro";
    this.apellido = "Osorio";
    this.edad = 29;
  }

  ionViewDivLoad(){
    console.log('Pagina Cargada');
  }

}
