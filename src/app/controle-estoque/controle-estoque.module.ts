import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleEstoqueRoutingModule } from './controle-estoque-routing.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    EditarComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ControleEstoqueRoutingModule,
    FormsModule,
    RadioButtonModule,
    InputMaskModule,
    CheckboxModule,
    InputNumberModule,
    ButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ControleEstoqueModule { }
