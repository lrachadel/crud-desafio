import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';


const routes: Routes = [  
  {path: 'estoque', component: ListagemComponent},
  {path: '', redirectTo:'estoque', pathMatch:'full'},
  {path: 'estoque/adicionar', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleEstoqueRoutingModule { }
