import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleEstoqueRoutingModule } from './controle-estoque-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListagemComponent } from './components/listagem/listagem.component';


@NgModule({
  declarations: [
    CadastroComponent,
    EditarComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ControleEstoqueRoutingModule
  ]
})
export class ControleEstoqueModule { }
