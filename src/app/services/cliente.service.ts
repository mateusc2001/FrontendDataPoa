import { Injectable } from '@angular/core';
import { ImplBaseService } from './Impl/impl.service';
import { Cliente } from '../model/cliente.model';
import { InterfaceBaseService } from './Interface/interface.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ImplBaseService<Cliente> implements InterfaceBaseService<Cliente>{
  
  public getPath(): string {
    return '/api/cliente'
  }  

  public getIdField(): string {
    return 'cliente'
  }


}
