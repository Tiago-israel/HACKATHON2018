import { Candidato } from './candidato';
import { Urna } from './urna';

export class Votacao {
    public id: number;
    public urna: Urna;
    public candidato: Candidato;
}