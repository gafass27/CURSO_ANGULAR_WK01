import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinoViajeComponent} from "../destino-viaje/destino-viaje.component";
import {DestinoViajeModel} from "../models/destino-viaje-model";
import {DestinosApiClientModel} from "../models/destinos-api-client.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViajeModel[];

  @Output() onItemAdded: EventEmitter<DestinoViajeModel>
  updates: string[];

  constructor(private destinosApiClient:DestinosApiClientModel) {
    this.onItemAdded = new EventEmitter();
    this.destinos = [];
    this.updates = [];
    this.destinosApiClient.subcribeOChange((d:DestinoViajeModel)=>{
      if(d != null){
        this.updates.push('se ha elegido ' + d.nombre);
      }
    });
  }

  ngOnInit(){
  }

  elegido(element: DestinoViajeModel  ){
    this.destinosApiClient.elegir(element);

  }

  agregado(d: DestinoViajeModel) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d)
  }

}
