import { Coordenadas } from './coordenadas.model';

export class LinhaOnibus{
    public linhaOnibusId: string;
    public idLinha: string;
    public codigo: string;
    public nome: string;
    public coordenadas: Array<Coordenadas> = new Array();

}