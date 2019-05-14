import { Component, OnInit } from '@angular/core';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { LinhaOnibusService } from 'src/app/services/linha-onibus.service';
import { BaseComponent } from '../impl/base.component';
import { Coordenadas } from 'src/app/model/coordenadas.model';
import { ResponseApi } from 'src/app/model/responseApi.model';
import { Point } from 'src/app/model/point.model';

@Component({
  selector: 'app-linha-onibus',
  templateUrl: './linha-onibus.component.html',
  styleUrls: ['./linha-onibus.component.scss']
})
export class LinhaOnibusComponent extends BaseComponent<LinhaOnibus> implements OnInit {

  coordenadaBuscada: Coordenadas = new Coordenadas();
  public baseObject: LinhaOnibus = new LinhaOnibus();
  points: Array<Point> = new Array<Point>();

  public getService() {
    return this.linhaOnibusService;
  }

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;

  constructor(private linhaOnibusService: LinhaOnibusService) {
    super();

  }

  buscarCoords(object) {
    this.coordenadaBuscada = object.coords;
  }

  adicionarCoords() {
    let point: Point = new Point();
    point.x = this.coordenadaBuscada.lat;
    point.y = this.coordenadaBuscada.lng;
    this.points.push(point)
    console.log(this.points);
  }

  ngOnInit() {
  }

  save() {
    this.getService().createOrUpdate(this.baseObject).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
      console.log(this.baseObject);
    
    }, err => {
      
    });
  }
}
