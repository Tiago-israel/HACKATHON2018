import { Candidato } from './../../models/candidato';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-candidatos',
    templateUrl: './candidatos.component.html',
    styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

    public candidato: Candidato = new Candidato();
    public candidatos: Candidato[] = [];

    ngOnInit(): void {
        this.buscarCandidatos();
    }

    public buscarCandidatos() {

    }

    public salvar() {

    }

}