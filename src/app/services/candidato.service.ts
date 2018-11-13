import { Candidato } from './../models/candidato';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CandidatoService {

    public api: string = 'http://localhost:3000'

    public constructor(private http: HttpClient) {}

    public buscarTodos() {
        return this.http.get(`${this.api}/candidatos`);
    }

    public salvar(candidato: Candidato) {
        return this.http.post(`${this.api}/candidatos`, candidato);
    }

}
