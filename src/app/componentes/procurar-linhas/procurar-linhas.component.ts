import { Component, OnInit } from '@angular/core';
import { ProcurarLinhasService } from 'src/app/services/procurar-linhas.service';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { Cliente } from 'src/app/model/cliente.model';
import { ResponseApi } from 'src/app/model/responseApi.model';

@Component({
  selector: 'app-procurar-linhas',
  templateUrl: './procurar-linhas.component.html',
  styleUrls: ['./procurar-linhas.component.scss']
})
export class ProcurarLinhasComponent implements OnInit {

  displayedColumns: string[] = ['idlinha', 'codigo', 'nome'];

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;
  raio: number = 1000;
  public origin: any;
  public destination: any;
  public waypoints: any = [];
  public listLinhas: Array<LinhaOnibus> = new Array<LinhaOnibus>();
  public baseObject: Cliente = new Cliente();

  constructor(private procuraLinhasService: ProcurarLinhasService) { }

  ngOnInit() {
  }

  buscarCoords(object) {
    this.lat = object.coords.lat;
    this.lng = object.coords.lng;
  }

  radiusChange($event) {
    this.raio = $event;
  }

  centerChange($event) {
    this.lat = $event.lat;
    this.lng = $event.lng;
  }

  listar() {
    let raioTeste = this.raio / 1000;
    this.procuraLinhasService.listar(this.lat, this.lng, raioTeste).subscribe((response: ResponseApi) => {
      this.listLinhas = response.data;
    });
  }

  changeLinha(onibus) {

    let arrayParaWaypoints: any[] = new Array<any>();
    this.procuraLinhasService.findById(onibus.id).subscribe((response: ResponseApi) => {
      const ultimaCoordenada = response.data.location.coordinates.length;
      for (let i = 0; i < ultimaCoordenada; i++) {
        let location = {
          location: {
            lat: response.data.location.coordinates[i].x,
            lng: response.data.location.coordinates[i].y
          }
        }
        arrayParaWaypoints.push(location);
      }
      this.waypoints = arrayParaWaypoints;
      this.origin = { lat: parseFloat(response.data.location.coordinates[0].x), lng: parseFloat(response.data.location.coordinates[0].y) };
      this.destination = { lat: parseFloat(response.data.location.coordinates[ultimaCoordenada - 1].x), lng: parseFloat(response.data.location.coordinates[ultimaCoordenada - 1].y) };
    })
  }


  

}
