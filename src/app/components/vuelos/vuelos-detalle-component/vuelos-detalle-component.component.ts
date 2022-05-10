import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vuelos-detalle-component',
  templateUrl: './vuelos-detalle-component.component.html',
  styleUrls: ['./vuelos-detalle-component.component.css']
})
export class VuelosDetalleComponentComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
  }
}
