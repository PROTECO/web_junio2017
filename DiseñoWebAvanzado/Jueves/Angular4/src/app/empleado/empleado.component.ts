import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	//Nombre de la etiqueta
    selector: 'app-empleado',
    templateUrl: 'empleado.component.html'
})  //no lleva punto y coma porque es un decorador

export class EmpleadoComponent{ 

//Clase 1
	//Atributos 
	//public nombreComponente = 'Componente de empleado';

	/*
	//Tipos de datos
	public nombre:string = 'Luis';
	public edad:number = 20;
	//public mayorEdad:boolean = true;
	////public nombre:string = 12; //ERROR
	////Arreglos
	//public hobbies:Array<string> = ['Ver Netflix', 'Leer', 'Programar'];
	//public cosasFavoritas:Array<any> = ['Verde', 8, 'PROTECO'];
	////Var en otros lenguajes
	//public var1:any = "Lara";
	//public var2:any = 1000;	

	constructor(){
		//Aquí se declaran los atributos
		console.log(this.nombre);

		this.nombre = 'Eduardo';
		this.edad = 21;

		//this.saludar("Luis"); //Mala práctica
	}

	//Primer método que se manda llamar en un componente de angular
	ngOnInit(){
		this.saludar(this.nombre);
		this.varYlet();
	}

	//Métodos
	saludar(nombre){
		alert("Hola soy " + nombre);
	}	

	//Dierencia entre let y var
	varYlet(){
		var numero = 5;

		if(numero === 5){ 
			let numero = 8;
			//numero = 8;
			console.log(numero);
		}
		console.log(numero);
	}*/
///////////////////////////////////////////////////////

//Clase 2
	//Crear clases y sentencias de control
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	//TWDB
	public colorSeleccionado:string;


	constructor(){
		this.empleado = new Empleado('Luis Lara', 20, 'Programador', true, 'red');
		
		this.trabajadores = [
			new Empleado('Marco López', 21, 'Programador', false, 'red'),
			new Empleado('Eduardo Lara', 20, 'Jefe', true, 'blue'),
			new Empleado('Jorge Chavez', 19, 'Cientifico de datos', false, 'green')
		];

		//TWDB
		this.colorSeleccionado = 'pink';
	}


	ngOnInit(){	
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	conBono(bool){
		this.trabajadores[0].bono = bool;
		this.empleado.bono = bool;
	}

	//TWDB
	getColorSeleccionado(){
		console.log(this.colorSeleccionado);
	}

}

