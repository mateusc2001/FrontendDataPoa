import { BaseInterfaceImpl } from '../interface/base.interface';
import { InterfaceBaseService } from 'src/app/services/Interface/interface.service';
import { ResponseApi } from 'src/app/model/responseApi.model';

export abstract class BaseComponent<T> implements BaseInterfaceImpl {

  public abstract baseObject: T;
  public abstract getService(): InterfaceBaseService<T>;
  public abstract listObject: Array<T>;
  public page = 0;
  public count = 10;


  constructor() { }

  findById(id: string) {
    this.getService().findById(id).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
    });
  }

  findAll(page: number, count: number) {
    this.getService().findAll(page, count).subscribe((response: ResponseApi) => {
      this.listObject = response.data.content;
    });
  }

  delete(id: string) {
    this.getService().delete(id).subscribe((response: ResponseApi) => {
    });
  }

  save() {
    this.getService().createOrUpdate(this.baseObject).subscribe((response: ResponseApi) => {
      this.baseObject = response.data;
    });
  }






}
