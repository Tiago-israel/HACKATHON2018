import { CandidatoService } from './../../services/candidato.service';
import { Candidato } from './../../models/candidato';
import { Component } from "@angular/core";

@Component({
    selector: 'app-votacao',
    templateUrl: './votacao.component.html',
    styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent {

    public nome: string;
    public numero: number;
    private candidato: Candidato;

    constructor(private candidatoService: CandidatoService) { }

    buscarCandidatos() {
        this.candidatoService.buscarTodos().subscribe(
            (candidatos: Candidato[]) => {
                const candidato = candidatos.find(candidato => candidato.numero === this.numero);
                if (candidato) {
                    this.candidato = candidato;
                    this.nome = candidato.nome;
                }
            });
    }

    votar() {
        this.candidato.quantidadeVotos += 1;
        this.tocarSom();
        setTimeout(() => {
            this.candidatoService.editar(this.candidato.id, this.candidato).subscribe(
                (data) => {
                    this.limpar();
                }
            )
        }, 2000)
    }

    limpar() {
        this.nome = '';
        this.numero = null;
        this.candidato = null;
    }

    tocarSom() {
        const audio = new Audio('assets/urna.mp3');
        audio.play();
    }

}