import { Point } from 'geojson';

export class LinhaOnibus{
    public linhaOnibusId: string;
    public idLinha: string;
    public codigo: string;
    public nome: string;
    public location: Array<Point> = new Array();
}