import { Component, OnInit } from '@angular/core';
import { ProcurarLinhasService } from 'src/app/services/procurar-linhas.service';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { Cliente } from 'src/app/model/cliente.model';
import { ResponseApi } from 'src/app/model/responseApi.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-procurar-linhas',
  templateUrl: './procurar-linhas.component.html',
  styleUrls: ['./procurar-linhas.component.scss']
})
export class ProcurarLinhasComponent implements OnInit {

  name: string;
  position: number;
  weight: number;
  symbol: string;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
