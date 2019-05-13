import { Injectable } from '@angular/core';
import { ImplBaseService } from './Impl/impl.service';
import { LinhaOnibus } from '../model/linhaOnibus.model';
import { InterfaceBaseService } from './Interface/interface.service';

@Injectable({
  providedIn: 'root'
})
export class LinhaOnibusService extends ImplBaseService<LinhaOnibus> implements InterfaceBaseService<LinhaOnibus>{

  public getPath(): string {
    return '/api/linhaOnibus';
  }

  public getIdField(): string {
    return 'linhaOnibus';
  }
  
}
