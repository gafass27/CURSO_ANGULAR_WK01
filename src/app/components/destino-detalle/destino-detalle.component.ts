import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../Nueva carpeta/abc/cursoAustralAngular/angular-wishlist/src/app/app.module';
import { DestinoViaje } from '../../../../../Nueva carpeta/abc/cursoAustralAngular/angular-wishlist/src/app/models/destino-viaje.model';
import { DestinosApiClient } from '../../../../../Nueva carpeta/abc/cursoAustralAngular/angular-wishlist/src/app/models/destinos-api-client.model';

/*
class DestinosApiClientViejo {
  getById(id: String): DestinoViaje {
    console.log('llamando por la clase vieja!');
    return null;
  }
}

interface AppConfig {
  apiEndpoint: String;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'mi_api.com'
};

const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

class DestinosApiClientDecorated extends DestinosApiClient {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, store: Store<AppState>) {
    super(store);
  }
  getById(id: String): DestinoViaje {
    console.log('llamando por la clase decorada!');
    console.log('config: ' + this.config.apiEndpoint);
    return super.getById(id);
  }
}
*/

@Component({
  selector: 'app-destino-detalle',
  templateUrl: '../../../../../Nueva carpeta/abc/cursoAustralAngular/angular-wishlist/src/app/components/destino-detalle/destino-detalle.component.html',
  styleUrls: ['../../../../../Nueva carpeta/abc/cursoAustralAngular/angular-wishlist/src/app/components/destino-detalle/destino-detalle.component.css'],
  providers: [DestinosApiClient //,
    //{ provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    //{ provide: DestinosApiClient, useClass: DestinosApiClientDecorated },
    //{ provide: DestinosApiClientViejo, useExisting: DestinosApiClient }

  ]
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  //constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClientViejo) { }

  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.destino = this.destinosApiClient.getById(id);
  }

}
