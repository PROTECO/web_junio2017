/**
 * Created by LLara on 16/05/2017.
 */

//Clase 6 ngTemplate
import { Component } from '@angular/core';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html'
})

export class PlantillaComponent {
  public administrador;

  constructor(){
    this.administrador= true;
  }
  ngOnInit() {

  }

  cambiar(value){
    this.administrador = value;
  }
}
