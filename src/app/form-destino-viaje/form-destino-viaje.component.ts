import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinoViajeModel} from "../models/destino-viaje-model";
import {FormBuilder, FormControl, FormGroup, Validator, ValidatorFn, Validators} from "@angular/forms";
import {debounce, debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap} from "rxjs";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViajeModel>;
  fg: FormGroup;
  minLongitud = 5;
  searchResult: string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['',Validators.compose([
       Validators.required,
       //this.nombreValidator
       this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any)=>{
      console.log('cambio en el formulario '+ form);
    })
  }

  ngOnInit() {
    let elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre,'input')
      .pipe(
        map((e:KeyboardEvent)=>(e.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(()=>ajax('/assets/datos.json'))
      ).subscribe(ajaxResponse =>{
        this.searchResult = ajaxResponse.response;
    });
  }

  guardar(nombre: string , url: string) :boolean{
    const d = new DestinoViajeModel(nombre,url);
    this.onItemAdded.emit(d)
    return false;
  }

  nombreValidator(control: FormControl):{ [s: String]: boolean } {
    const longitud = control.value.toString().trim().length;
    if(longitud>0 && longitud <5){
      return {invalidNombre:true}
    }
    return null;
  }

  nombreValidatorParametrizable(minLong: number):ValidatorFn{
    return (control: FormControl):{[s:string]:boolean} | null => {
      const longitud = control.value.toString().trim().length;
      if(longitud>0 && longitud<minLong){
        return {minLongNombre:true};
      }
      return null;
    }
  }

}
