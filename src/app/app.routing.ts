import { VotacaoComponent } from './components/votacoes/votacao.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path:'',
        redirectTo:'candidatos',
        pathMatch:'full'
    },
    {
        path: 'candidatos',
        component: CandidatosComponent
    },
    {
        path:'votar',
        component:VotacaoComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }