/**
 * Created by LLara on 14/05/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()

export class RopaService {
  public pantalon = 'pantalones';
  public arrayRopa = ['zapatos', 'camisa'];

  prueba(nombrePrenda){
    return nombrePrenda;
  }

  addArray(nombrePrenda): Array<string> {
    this.arrayRopa.push(nombrePrenda);
    return this.getRopa();
  }

  getRopa(): Array<string> {
    return this.arrayRopa;
  }

  delateRopa(indice: number): Array<string> {
    this.arrayRopa.splice(indice, 1);
    return this.getRopa();
  }
}
