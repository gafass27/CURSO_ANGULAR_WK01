import {DestinoViajeModel} from "./destino-viaje-model";
import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class DestinosApiClientModel{
  destinos: DestinoViajeModel[];
  current: Subject<DestinoViajeModel> = new BehaviorSubject<DestinoViajeModel>(null);


  constructor(public nombre:string ,public url:string) {
    this.destinos = [];
  }

  getAll():DestinoViajeModel[]{
    return this.destinos;
  }
  getById(id:String):DestinoViajeModel{
    return this.destinos.filter(function (d){return d.id.toString() == id})[0];
  }
  add(d: DestinoViajeModel) {
      this.destinos.push(d);
  }
  elegir(d: DestinoViajeModel){
    this.destinos.forEach(x => x.setSelected(false));
    d.setSelected(true);
    this.current.next(d);
  }

  subcribeOChange(fn){
    this.current.subscribe(fn);
  }
}
