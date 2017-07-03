/**
 * Created by LLara on 13/05/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar componentes
import { FrutaComponent } from './fruta/fruta.component';
import { VerduraComponent } from './verdura/verdura.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},  //home
  {path: 'home', component: HomeComponent},  //home
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:id', component: ContactoComponent}, //con parámetro
  {path: 'fruta', component: FrutaComponent},
  {path: 'verdura', component: VerduraComponent},
  {path: '**', component: HomeComponent} //404
];

export const appRoutingProviders: any [] = [];  //lo necesia angular
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



