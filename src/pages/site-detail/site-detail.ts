import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ToastController  } from 'ionic-angular';
import {Storage } from '@ionic/storage'

import { ModalImagesPage } from '../modal-images/modal-images';
import { ModalGoogleMapsPage } from '../modal-google-maps/modal-google-maps';
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
  gallery:any;
  gallerBase64:any;
  favoritos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal:ModalController, public ds:DrupalServiceProvider , private storage: Storage , public toastCtrl: ToastController) {
    this.site = navParams.get('site');
    this.site.images = [];
    this.description = this.site.description.split(".");
    this.gallery = [];
    this.gallerBase64 = [];
    this.favoritos = [];

    this.storage.get('favoritos')
    .then((result) => {
      console.log(result);
      if(result != null && result != undefined){
        this.favoritos = result;
      }
    })
    .catch(() => {
      this.favoritos = [];
    });
  }

  ionViewDidLoad(){
    this.ds.getGalleyBySiteId(this.site.id).subscribe(gallery => {
      this.gallery = gallery;
      this.gallery.map( imageSite =>{
        this.toDataURL(imageSite.imagen)
          .then(dataUrl => {
            this.gallerBase64.push(dataUrl);
          });
      });
    });
  }

  openModal(){
    const myModal = this.modal.create(ModalImagesPage , { listImagesBase64: this.gallerBase64 } );
    myModal.present();
  }

  openModalGoogleMaps(){
    let location = this.site.location.split(",");
    const myModal = this.modal.create(ModalGoogleMapsPage , {location : location});
    myModal.present();
  }

  addMyFavorite(){
    let status = false;
    this.favoritos.find((site) => {
      if(site.id === this.site.id){
        status = true;
      }
    });
    
    if(!status){
      this.favoritos.push(this.site);
      this.storage.set('favoritos', this.favoritos);
      let toast = this.toastCtrl.create({
        message: 'Has agregado este sitio a tus favoritos',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: 'Este sitio ya es uno de tus favoritos',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  private toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
  }))

  public findSite(site){
    return site.id === this.site.id ? true : false;
  }

  public goToBack(){
    this.navCtrl.pop();
  }
}
