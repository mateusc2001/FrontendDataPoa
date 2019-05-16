import { Component, OnInit, ViewChild } from '@angular/core';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { LinhaOnibusService } from 'src/app/services/linha-onibus.service';
import { BaseComponent } from '../impl/base.component';
import { ResponseApi } from 'src/app/model/responseApi.model';
import { GeoJsonMultiPoint } from 'src/app/model/geoJsonMultiPoint';
import { Coordenadas } from 'src/app/model/coordenadas.model';

@Component({
  selector: 'app-linha-onibus',
  templateUrl: './linha-onibus.component.html',
  styleUrls: ['./linha-onibus.component.scss']
})
export class LinhaOnibusComponent extends BaseComponent<LinhaOnibus> implements OnInit {
  public listObject: LinhaOnibus[];

  coordinates: Array<Coordenadas> = new Array<Coordenadas>();

  coordenadaBuscada: Coordenadas = new Coordenadas();
  public baseObject: LinhaOnibus = new LinhaOnibus();

  public getService() {
    return this.linhaOnibusService;
  }

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;

  constructor(private linhaOnibusService: LinhaOnibusService) {
    super();
    this.baseObject.location = new GeoJsonMultiPoint();
    this.baseObject.location.coordinates = new Array<Coordenadas>();
  }

  buscarCoords(object) {
    this.coordenadaBuscada = new Coordenadas();
    this.coordenadaBuscada.lat = object.coords.lat;
    this.coordenadaBuscada.lng = object.coords.lng;
  }

  adicionarCoords() {
    this.baseObject.location.coordinates.push(this.coordenadaBuscada);
  }

  ngOnInit() {
  }

  save() {
    this.getService().createOrUpdate(this.baseObject).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
      this.baseObject = new LinhaOnibus();
      this.baseObject.location = new GeoJsonMultiPoint();
      this.baseObject.location.coordinates = new Array<Coordenadas>();
    }, err => {

    });
  }
}
