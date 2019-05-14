import { LinhaOnibus } from './linhaOnibus.model';

export class Cliente{
    public clienteId: string;
    public clienteNome: string;
    public clienteCnpj: number;
    public endereco: string;
    public numero: number;
    public complemento: string;
    public cidade: string;
    public bairro: string;
    public uf: string;
    public fone: string;
    public email: string;
    public linhaOnibus: Array<LinhaOnibus> = new Array();
}