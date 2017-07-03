/**
 * Created by LLara on 13/05/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar componentes

import { CochesComponent } from './coches/coches.component';
import {PlantillaComponent} from "./plantilla/plantilla.component";



const appRoutes: Routes = [
  {path: '', component: CochesComponent},  //home
  {path: 'contacto', component: CochesComponent}, //clase 5
  {path: 'plantilla', component: PlantillaComponent}, //clase 6
  {path: '**', component: CochesComponent} //404
];

export const appRoutingProviders: any [] = [];  //lo necesia angular
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



