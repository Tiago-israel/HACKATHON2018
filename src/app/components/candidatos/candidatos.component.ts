import { CandidatoService } from './../../services/candidato.service';
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

    constructor(private candidatoService: CandidatoService) { }

    ngOnInit(): void {
        this.buscarCandidatos();
    }

    public buscarCandidatos() {
        this.candidatoService.buscarTodos().subscribe(
            (candidatos: Candidato[]) => {
                this.candidatos = candidatos;
            }
        )
    }

    public salvar() {
        this.candidatoService.salvar(this.candidato).subscribe(data => {
            this.buscarCandidatos();
        });
    }

}