import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';

import { ModalImagesPage } from '../modal-images/modal-images';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal:ModalController, public ds:DrupalServiceProvider) {
    this.site = navParams.get('site');
    this.site.images = [];
    this.description = this.site.description.split(".");
    this.gallery = [];
    this.gallerBase64 = [];
  }

  ionViewDidLoad(){
    console.log(this.site.id);
    this.ds.getGalleyBySiteId(this.site.id).subscribe(gallery => {
      this.gallery = gallery;
      this.gallery.map( imageSite =>{
        //TODO --- Lo debo remplazaar en el final
        imageSite.imagen = imageSite.imagen.replace("http://192.168.1.53" , "/image/");
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

  private toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
  }))

}
