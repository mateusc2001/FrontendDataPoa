import { Coordenadas } from './coordenadas.model';

export class GeoJsonMultiPoint{
    type: string = "MultiPoint"
    coordinates: Array<Coordenadas> = new Array<Coordenadas>();
}