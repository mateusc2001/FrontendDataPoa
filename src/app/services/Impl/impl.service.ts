import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametersService } from '../parameters.service';
import { Constantes } from 'src/app/global/constantes';
import { Observable } from 'rxjs';
import { InterfaceBaseService } from '../Interface/interface.service';

@Injectable({
    providedIn: 'root'
})
export abstract class ImplBaseService<T> implements InterfaceBaseService<T> {

    public abstract getPath(): string;

    public abstract getIdField(): string;

    constructor(protected http: HttpClient,
        protected parameterService: ParametersService) { }

    public createOrUpdate(object: T): Observable<any> {
        if (object[this.getIdField()]) {
            return this.update(object);
        } else {
            object[this.getIdField()] = null;
            return this.create(object);
        }
    }

    private create(object: T): Observable<any> {
        return this.http.post(`${this.parameterService.getValueFromProperties(Constantes.CRUD_API_URL)}${this.getPath()}`, object);
    }

    private update(object: T): Observable<any> {
        return this.http.put(`${this.parameterService.getValueFromProperties(Constantes.CRUD_API_URL)}${this.getPath()}`, object);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${this.parameterService.getValueFromProperties(Constantes.CRUD_API_URL)}${this.getPath()}/${id}`);
    }

    findById(id: string): Observable<any> {
        return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.CRUD_API_URL)}${this.getPath()}/${id}`);
    }

    findAll(page: number, count: number): Observable<any> {
        return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.CRUD_API_URL)}${this.getPath()}/${page}/${count}`);
    }

}
