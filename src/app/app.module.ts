import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AgmCoreModule, LAZY_MAPS_API_CONFIG } from '@agm/core';
import { LinhaOnibusComponent } from './componentes/linha-onibus/linha-onibus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from '../app/modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsConfig } from './google-maps-config';
import {NgxMaskModule} from 'ngx-mask';
import { ProcurarLinhasComponent } from './componentes/procurar-linhas/procurar-linhas.component'

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LinhaOnibusComponent,
    ProcurarLinhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MaterialModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    {provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
