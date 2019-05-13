import { BaseInterfaceImpl } from '../interface/base.interface';
import { InterfaceBaseService } from 'src/app/services/Interface/interface.service';
import { ResponseApi } from 'src/app/model/responseApi.model';

export abstract class BaseComponent<T> implements BaseInterfaceImpl {

  public abstract baseObject: T;
  public abstract getService(): InterfaceBaseService<T>;

  constructor() { }

  findById(id: string) {
    this.getService().findById(id).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
    }, err => {

    });
  }

  delete(id: string) {
    this.getService().delete(id).subscribe((response: ResponseApi) => {

    }, err => {

    });
  }

  save() {
    this.getService().createOrUpdate(this.baseObject).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
    }, err => {
      
    });
  }






}
