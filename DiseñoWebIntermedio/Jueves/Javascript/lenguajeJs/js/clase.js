
/*
//Operadores
=
+
-
*
%
++
--

//Lógicos
&&
||
!=
*/
var x=5;
document.write(1!=true);
document.write(1==true); //equivalente
document.write(1===true); //exacto}
document.write("<br><br><br>");

document.write(1==true && 0==false); //true
document.write(1==true || 0==false); //false
document.write(1===true || 0===false); //false


document.write("<br><br><br>"+("Z"<"z")+"<br>");
document.write(!isNaN(x)?"Sí es un número":"No es un número");



/*

//Relacionales

var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2; // resultado = false
document.write(resultado);
resultado = numero1 < numero2; // resultado = true
 
numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false
*/


/*
//Cuadros de mensajes más comunes

alert("Hola");

confirm("Pregunta");

prompt("Texto","ssaas");

				//casteo de string a numero NaN=NotaNumber
var respuesta = Number(prompt("Dame un número",4));
console.log(respuesta);



	var name = prompt("Cuál es tu nombre?");
document.write(name);
*/



//Arrays
/*
var arr1 = [1,2,3,4]
var arr2 = [];
	arr2.push("Uno");
	arr2.push("Dos");
	arr2.push("Tres");
	arr2.push("Cuatro");

console.log(arr1); //imprimir arrgelo con su formato
console.log(arr2); //imprimir arrgelo con su formato

console.log(arr1.join(","));//imprimir con formato eorsoanalizado en este caso una coma
console.log(arr2.join("."));//imprimir con formato eorsoanalizado en este caso una coma

console.log(arr1.pop());//elemina último elemento en el arreglo
console.log(arr2.pop());//elemina último elemento en el arreglo

console.log(arr1); //imprimir arrgelo con su formato
console.log(arr2); //imprimir arrgelo con su formato

console.log(arr1.length);//Longitud del arreglo
console.log(arr2.length);

//var ordenados = arr2.sort();
//console.log(ordenados);

var reverse = arr1.reverse(); //los muestra al revés
console.log(reverse);
var ordenados = arr1.sort();//los muestra ordenados
console.log(ordenados);

//Accediendo a los elementos del arreglo independientes
console.log(arr1);


console.log(arr2);
console.log(arr1[1]);
console.log(arr2[1]);

console.log(arr1[0]);
console.log(arr2[0]);

console.log(arr1[3]);
*/




/*
//nombreArray = new Array(tamaño);
equipos = new Array ("E1","E1",45,45);

console.log(equipos[2]+5);
console.log(equipos[2]+equipos[3]);
console.log(equipos[0]+equipos[2]);

arreglo = new Array("Inter1","Inter2");
equipos[4] = arreglo;
		console.log(equipos[4]);
		console.log(equipos);
		console.log(equipos.concat(equipos[4]));
		console.log(equipos.join("|"));

		console.log(equipos);
*/



/*
//FUNCIONAL
function Sumar(a,b){
	return (a+b);
}
console.log(Sumar(5,6));
*/


//Sentencias de control
//IF (presentación)
/*
var edad=17
if(edad>=18){
    alert("¡Es mayor de edad!");
    }
else{
	alert("No es mayor de edad!")
}
*/
/*
//ELSE IF 
var edad=18
if(edad<18){
    alert("¡Es un niño!");
    }
else if(edad<=30){
	alert("¡Es un adulto joven!");

}
else if(edad<60){
	alert("¡Es un adulto!");	
}
else{
	alert("Es un viejito!")
}
*/

/*
//WHILE(presentación)
var arr1 = [1,2,3,4]
var i=0;
while (i < 4) {
    document.write(arr1[i]);
    i++;
}
*/


/*
//FOR (presentación)

var arr1 = [1,2,3,4]
for (i = 0; i < arr1.length; i++) { 
    document.write(arr1[i]);
}
*/
