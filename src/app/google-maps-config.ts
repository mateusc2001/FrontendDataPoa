import { ParametersService } from './services/parameters.service';
import { Constantes } from 'src/app/global/constantes';
import { Injectable } from "@angular/core";

@Injectable()
export class GoogleMapsConfig {
  apiKey: string;
    
  constructor(protected parameterService: ParametersService) {
    this.apiKey = `${this.parameterService.getValueFromProperties(Constantes.GOOGLE_API_KEY)}`
  }
}