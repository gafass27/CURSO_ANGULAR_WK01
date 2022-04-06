import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import  { RouterModule,Routes } from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';


const routes: Routes = [
  { path : '', redirectTo: 'home' ,  pathMatch:'full'},
  { path : 'home', component: ListaDestinosComponent },
  { path : 'destino', component: DestinoDetalleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
