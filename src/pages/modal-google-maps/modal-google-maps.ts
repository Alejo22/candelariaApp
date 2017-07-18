import { Component, ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

declare var google;


@IonicPage()
@Component({
  selector: 'page-modal-google-maps',
  templateUrl: 'modal-google-maps.html',
})
export class ModalGoogleMapsPage {

  public location:any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.location = this.navParams.get("location");
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  loadMap(){
    let centerMap = new google.maps.LatLng(4.59803739, -74.07534206);

    //creo las opciones del mapa
    let mapOptions = {
      center: centerMap,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    //Cargo el mapa en el div
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    
    ////////////////////// Finaliza la construccion del mapa /////////////////////////

    //Se definen los servicios de routing
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    //Cargo los puntos de la ruta
    let inicio = new google.maps.LatLng(4.60007465, -74.07614672);
    let fin = new google.maps.LatLng(this.location[0], this.location[1]);

    //Genero el request de la ruta
    var request = {
      origin: inicio,
      destination: fin,
      travelMode: google.maps.DirectionsTravelMode.WALKING,
      unitSystem: google.maps.DirectionsUnitSystem.METRIC,
      provideRouteAlternatives: false
    };

    //instancio el mapa y creo la ruta
    let mapa = this.map;
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log("Entre a la ruta" + response);
        directionsDisplay.setMap(mapa);
        directionsDisplay.setDirections(response);
      } else {
        alert("No existen rutas entre ambos puntos");
      }
    });

  }

}