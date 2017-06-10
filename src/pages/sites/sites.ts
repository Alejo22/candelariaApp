import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Sites } from '../../clases/sites';

import { SiteDetailPage } from '../site-detail/site-detail';

@IonicPage()
@Component({
  selector: 'page-sites',
  templateUrl: 'sites.html',
})


export class SitesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*type typesites = Array<Sites>;

    var listSites:typesites; 
    let objeto1 = new Sites( 1 , "Sitio 1" , 'assets/images/sites/1.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
    let objeto2 = new Sites( 1 , "Sitio 1" , 'assets/images/sites/1.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
    let objeto3 = new Sites( 1 , "Sitio 1" , 'assets/images/sites/1.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
    let objeto4 = new Sites( 1 , "Sitio 1" , 'assets/images/sites/1.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
    let objeto5 = new Sites( 1 , "Sitio 1" , 'assets/images/sites/1.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
    listSites.push(objeto1);
    listSites.push(objeto2);
    listSites.push(objeto3);
    listSites.push(objeto4);
    listSites.push(objeto5);


    // [{ id:1 , name:"uno" }, { id:2 , name:"dos"}];
    //var site = new Sites( );
    //listSites.push(site);
    /*for(let i = 0 ; i < 15 ; i++){
      let letra = i.toString();
      let site = new Sites( i.toString() , "Sitio " + letra.toString() , 'assets/images/sites/' +  i + '.jpg' , "Quisque fermentum fermentum turpis in fermentum. Pellentesque sodales augue nibh, dictum convallis ante porta non. Nam finibus pretium lacinia. Phasellus molestie tempor nisi, non vulputate diam. Praesent eu lectus elementum est ullamcorper venenatis eget rhoncus tellus." );
      this.listSites.push(site);
    }x

    console.log(listSites);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesPage');
  }

  public goToSiteDescription(){
    this.navCtrl.push(SiteDetailPage);
  }
}