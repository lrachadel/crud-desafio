import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Item } from '../../models/item.interface';
import { UnidadeMedida } from '../../models/unidade-medida.enum';
import { EstoqueService } from '../../services/estoque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formItem: Item = {
    id: uuid(),
    nome: null,
    unidade: UnidadeMedida.LITRO,
    quantidade: 0,
    preco: 0.0,
    perecivel: false,
    validade:'',
    fabricacao:''
  }
  tipoUnidade: string
  unidadeMedida = UnidadeMedida
  keys: string[]
  
 

  constructor( private estoqueService: EstoqueService, private router: Router) { 
    this.keys = Object.keys(UnidadeMedida);
  }

  onSubmit() {
    this.estoqueService.addItem(this.formItem);
    this.router.navigate(['estoque']);
  }

  onChangeUnidade(key) {
    switch (key){
      case 'LITRO':
        this.tipoUnidade = 'lt'
        break;
      case 'QUILOGRAMA':
        this.tipoUnidade = 'kg'
        break;
      case 'UNIDADE':
        this.tipoUnidade = 'un'
    }
  }
}
