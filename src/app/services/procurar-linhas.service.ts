import { Injectable } from '@angular/core';
import { ParametersService } from './parameters.service';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../global/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcurarLinhasService {

  constructor(protected http: HttpClient, protected parameterService: ParametersService) { }

  listar(lat: number, lng: number, radius: number) {
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.INTEGRATION_API_URL)}/api/itinerario/${lng}/${lat}/${radius}`);
  }

  findByIdLinha(idlinha: string): Observable<any>{
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.INTEGRATION_API_URL)}/api/itinerario/${idlinha}`);
  }

  findById(id: string): Observable<any>{
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.INTEGRATION_API_URL)}/api/itinerario/id/${id}`);
  }
}
