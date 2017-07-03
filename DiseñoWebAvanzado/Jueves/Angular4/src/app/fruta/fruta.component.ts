import {Component} from '@angular/core';

@Component({
	//Nombre de la etiqueta
    selector: 'app-fruta',
    //html embebido
    //template: `<h1>Soy una fruta</h1>
	//			<p>Accediendo a los atributos</p>
	//			<p>{{nombreComponente}}</p>
	//			<p>{{naranja}}</p>
	//			<p>{{sandia}}</p>
    //`
    templateUrl: 'fruta.component.html'
})  //no lleva punto y coma

export class FrutaComponent{ 
//Atributos 
	public nombreComponente = 'Componente de frutas';
	public naranja = 'Soy una naranja';
	public sandia = 'Soy una sandia';

	//Existen los atributos private que solo los ve el componente fruta
	public melon = 'Soy un melon privado';

}

//Ejercicio: Hacer otro componente de verduras.