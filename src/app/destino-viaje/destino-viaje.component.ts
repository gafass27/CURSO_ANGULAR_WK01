import {Component, OnInit, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import {DestinoViajeModel} from "../models/destino-viaje-model";

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

    @Input() destino: DestinoViajeModel;
    @Input("idx") posicion: number;
    @HostBinding('attr.class') ccsClass ='col-md-4';
    @Output() clicked: EventEmitter<DestinoViajeModel>;
  constructor() {
    this.destino = new DestinoViajeModel("","");
    this.clicked = new EventEmitter<DestinoViajeModel>();
    this.posicion = 0;
  }
  ir(){
    this.clicked.emit(this.destino);
    return false;
  }

  ngOnInit() {
  }

}
