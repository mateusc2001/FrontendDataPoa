import { Component, OnInit } from '@angular/core';
import { ProcurarLinhasService } from 'src/app/services/procurar-linhas.service';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { LinhaOnibusService } from 'src/app/services/linha-onibus.service';
import { Cliente } from 'src/app/model/cliente.model';
import { ResponseApi } from 'src/app/model/responseApi.model';

@Component({
  selector: 'app-procurar-linhas',
  templateUrl: './procurar-linhas.component.html',
  styleUrls: ['./procurar-linhas.component.scss']
})
export class ProcurarLinhasComponent implements OnInit {

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;
  raio: number = 10000;
  public linhaOnibus: LinhaOnibus = new LinhaOnibus();
  public listLinhas: LinhaOnibus[];

  public baseObject: Cliente = new Cliente();


  constructor(private procuraLinhasService: ProcurarLinhasService, 
    private linhaOnibusService: LinhaOnibusService) { }

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
    let raioTeste = this.raio/1000;
    this.procuraLinhasService.listar(this.lat, this.lng, raioTeste).subscribe((response: ResponseApi) => {
      this.listLinhas = response.data.content;
      // this.baseObject.linhaOnibus = this.listLinhas = response.content.content;
      console.log(JSON.stringify(this.listLinhas));
    });

  }
}
