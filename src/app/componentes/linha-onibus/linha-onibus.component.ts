import { Component, OnInit } from '@angular/core';
import { LinhaOnibus } from 'src/app/model/linhaOnibus.model';
import { LinhaOnibusService } from 'src/app/services/linha-onibus.service';
import { BaseComponent } from '../impl/base.component';

@Component({
  selector: 'app-linha-onibus',
  templateUrl: './linha-onibus.component.html',
  styleUrls: ['./linha-onibus.component.scss']
})
export class LinhaOnibusComponent extends BaseComponent<LinhaOnibus> implements OnInit {

  public baseObject: LinhaOnibus = new LinhaOnibus();

  public getService(){
    return this.linhaOnibusService;
  }

  lat: number = -30.059434;
  lng: number = -51.173111;
  zoom: number = 12;
  
  constructor(private linhaOnibusService: LinhaOnibusService) {
    super();

   }

  ngOnInit() {
  }

}
