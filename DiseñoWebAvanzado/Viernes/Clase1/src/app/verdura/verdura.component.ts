import {Component} from '@angular/core';

@Component({
	//Nombre de la etiqueta
    selector: 'app-verdura',
    templateUrl: 'verdura.component.html'
})  //no lleva punto y coma porque...

export class VerduraComponent{ 
//Atributos 
	public nombreComponente = 'Componente de verduras';
	public chicharo = 'Soy un chicharo';
	public ejote = 'Soy un ejote';
}