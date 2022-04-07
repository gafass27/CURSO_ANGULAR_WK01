import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import  { RouterModule,Routes } from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import {DestinosApiClientModel} from "./models/destinos-api-client.model";
import {ActionReducerMap} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";


const routes: Routes = [
  { path : '', redirectTo: 'home' ,  pathMatch:'full'},
  { path : 'home', component: ListaDestinosComponent },
  { path : 'destino', component: DestinoDetalleComponent }
]
// redux init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState>={
  destinos: reducerDestinosViajes
}
let reducersInitalState = {
  destinos: initializeDestinosViajesStates()
}

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers,{initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinosViajesEffects])
  ],
  providers: [
    DestinosApiClientModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
