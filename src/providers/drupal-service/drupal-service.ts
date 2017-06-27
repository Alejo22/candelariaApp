import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DrupalServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DrupalServiceProvider {
  server: string;

  constructor(public http: Http) {
    this.server = '/api/';
    //this.server = "http://192.168.1.53/candelaria/api/";
  }

  getMenuVersion():void{
    
  }

  getMenu(){
    return this.http.get( this.server + 'views/tipo_lugar_service')
    .map(res => res.json());
  }

  getListSites(idTipoLugar){
    return this.http.get( this.server + 'views/lugares_service?args[0]=' + idTipoLugar)
    .map(res => res.json());
  }

  getGalleyBySiteId(idSite){
    return this.http.get( this.server + 'views/list_gallery_service?args[0]=' + idSite)
    .map(res => res.json());
  }

}
