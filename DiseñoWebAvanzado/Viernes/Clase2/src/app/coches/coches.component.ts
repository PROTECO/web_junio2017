/**
 * Created by LLara on 13/05/2017.
 */

//Clase 4 formularios
import { Component } from '@angular/core';
import {Coche} from "./coche";
//Clase 5 servicios HTTP y AJAX
import {PeticionesService} from "../services/peticiones.service";
import {getAllAssociatedFiles} from "@angular/cli/utilities/get-dependent-files"; // para pasar parametros en la ruta


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

// para que funcionen los parametros por ruta
export class CochesComponent {
  public titulo = "Página de coches";
  public coche: Coche;
  public coches: Array<Coche>;

  //clase5
  public articulos;
  public full;
  public best;

  //el constructor es de la clase5
  constructor(
      private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche ("","","");
    this.coches = [
      new Coche("Seat", "blanco", "2017"),
      new Coche("Renault", "blanco", "2018")
    ];
  }

  onSubmit() {
    //console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche ("","","");
  }

  // Clase 5 servicios
  ngOnInit() {

    // console.log(this._peticionesService.getPrueba())

    /**
    this._peticionesService.getArticulo().subscribe(
      result => {
        this.articulos = result;
        console.log(this.articulos);

        if (!this.articulos){
          console.log("Error en el servidor");
        }
        // console.log(result);
      },
      error => {
        var errorMsg = <any>error;
        console.log(errorMsg);
      }
    );**/

    /** Best Bitso
    this._peticionesService.getBest().subscribe(
      result => {
        this.articulos = result;
        console.log(this.articulos);

        if (!this.articulos){
          console.log("Error en el servidor");
        }
        // console.log(result);
      },
      error => {
        var errorMsg = <any>error;
        console.log(errorMsg);
      }
    );**/

    /** Full depth Bitso
    this._peticionesService.fullDepthBitso().subscribe(
      result => {
        this.full = result;
        console.log("Check full depth");

        if (!this.full){
          console.log("Error en el servidor");
        }
        // console.log(result);
      },
      error => {
        var errorMsg = <any>error;
        console.log(errorMsg);
      }
    );**/

    /** Best Bitso**/
    this._peticionesService.bestBitso().subscribe(
      result => {
        this.best = result;
        console.log('Check best');

        if (!this.best) {
          console.log('Error en el servidor');
        }
        // console.log(result);
      },
      error => {
        const errorMsg = <any>error;
        console.log(errorMsg);
      }
    );

  }
}
