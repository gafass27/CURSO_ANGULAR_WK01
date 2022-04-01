import { Component, OnInit } from '@angular/core';
import {DestinoViajeComponent} from "../destino-viaje/destino-viaje.component";
import {DestinoViajeModel} from "../models/destino-viaje-model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViajeModel[];
  constructor() {
    this.destinos = [];
  }

  ngOnInit(){
  }

  guardar(nombre:string , url:string) :boolean{
    this.destinos.push(new DestinoViajeModel(nombre,url));
    console.log(this.destinos);

    return false
  }

}
