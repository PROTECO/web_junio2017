export class Empleado{
	/*
	public nombre:string;
	public edad:number;

	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	*/

	//Definir modelo equivalente a lo de arriba
	constructor(
		public nombre:string,
		public edad:number,
		public puesto:string,
		public bono:boolean,		
		public color:string		
	){}

}