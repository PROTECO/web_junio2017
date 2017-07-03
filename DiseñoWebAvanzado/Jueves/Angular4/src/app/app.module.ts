import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { VerduraComponent } from './verdura/verdura.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  //Directivas, pipes y componentes para ultilizar en la aplicación de forma global
  declarations: [
    AppComponent,
    FrutaComponent,
    VerduraComponent,
    EmpleadoComponent
  ],
  //Cargar modulos del framework o que hagamos nosotros en la aplicación de forma global
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Cargar servicios del framework o que hagamos nosotros en la aplicación de forma global
  providers: [],
  //Componente principal del modulo
  bootstrap: [AppComponent]
})


export class AppModule { }
