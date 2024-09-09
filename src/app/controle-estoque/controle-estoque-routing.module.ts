import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';


const routes: Routes = [  
  {path: 'estoque', component: ListagemComponent},
  {path: '', redirectTo:'estoque', pathMatch:'full'},
  {path: 'estoque/adicionar', component: CadastroComponent},
  {path: 'estoque/editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleEstoqueRoutingModule { }
