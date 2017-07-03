/**
 * Created by LLara on 13/05/2017.
 */
import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router"; // para pasar parametros en la ruta

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})

// para que funcionen los parametros por ruta
export class ContactoComponent {
  public titulo = "Página de contacto";
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
      this._route.params.forEach((params: Params) => {
        this.parametro = params['id'];
      });
  }

  redirigir() {
    this._router.navigate(['/contacto', 'proteco.mx']);
  }

  redirigirHome() {
    this._router.navigate(['/home']);
  }
}
