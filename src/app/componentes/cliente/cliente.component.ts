import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { BaseComponent } from '../impl/base.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { LinhaOnibusService } from 'src/app/services/linha-onibus.service';
import { ResponseApi } from 'src/app/model/responseApi.model';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent extends BaseComponent<Cliente> implements OnInit {

  public listObject: Cliente[];
  public listBus: LinhaOnibus[];
  public bus: any;
  public linhaOnibus: LinhaOnibus = new LinhaOnibus();

  public baseObject: Cliente = new Cliente();

  public getService() {
    return this.clienteService;
  }

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;

  constructor(private clienteService: ClienteService, private linhaOnibusService: LinhaOnibusService) {
    super();
  }

  ngOnInit() {
    this.loadCombo();
  }

  loadCombo() {
    this.linhaOnibusService.findAll(0, 100).subscribe((response: ResponseApi) => {
      this.listBus = response.data.content;
    });
  }

  change() {
    this.baseObject.linhaOnibus.push(this.linhaOnibus);
  }

  save() {
    this.getService().createOrUpdate(this.baseObject).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
      this.baseObject = new Cliente();
      this.loadCombo();
    });
  }

}
