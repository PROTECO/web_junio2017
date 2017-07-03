import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by LLara on 14/05/2017.
 */

@Pipe({
  name: 'conversor'
})

export class ConversorPipe implements PipeTransform {
  transform(value, multiplicador){
    let valor1 = parseInt(value);
    let valor2 = parseInt(multiplicador);

    let resultado = "La multiplicación es: " + (valor1 * valor2);
    return resultado;
  }
}
