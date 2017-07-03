/**
 * Created by LLara on 13/05/2017.
 */
import { Component } from '@angular/core';
import {RopaService} from "../services/ropa.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent {
  public titulo = "Página principal";
  /**servicios**/
  public listadoRopa: Array<string>;
  public prenda: string;
  /**pipes**/
  public fecha;

  constructor(
    private _ropaService: RopaService
  ) {
    /**pipes**/
    this.fecha = new Date(2017, 5, 14);
  }

  ngOnInit() {
    //console.log(this._ropaService.prueba('zapatos'));
    this.listadoRopa = this._ropaService.getRopa();
    console.log(this.listadoRopa);
  }

  guardarPrenda() {
      console.log(this._ropaService.addArray(this.prenda));
      this.prenda = null;
  }

  eliminarPrenda(indice: number) {
    //alert(indice);
    console.log(this._ropaService.delateRopa(indice));
  }


}


