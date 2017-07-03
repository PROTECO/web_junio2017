/**
 * Created by LLara on 15/05/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class PeticionesService {
  public url: string;
  public urlFull: string;
  public urlBest: string;

  constructor(private _http: Http) {
    //this.url = "https://jsonplaceholder.typicode.com/posts";
    this.urlFull = 'https://api.bitso.com/v3/order_book/?book=btc_mxn';
    this.urlBest = 'https://api.bitso.com/v3/ticker/';
  }
  getPrueba() {
    return 'hola servicio';
  }

  getArticulo() {
    return this._http.get(this.url)
                      .map(res => res.json());
  }

  /**
  fullDepthBitso() {
    console.log('Initial full depth');
      return Observable.interval(900)
      .flatMap(() => this._http.get(this.urlFull)
        .map( res => res.json()));
  }**/


  bestBitso() {
    console.log('Initial best');
    return Observable.interval(950)
      .flatMap(() => this._http.get(this.urlBest)
        .map( res => res.json()));
  }

}
