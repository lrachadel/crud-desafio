import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from '../../models/item.interface';
import { UnidadeMedida } from '../../models/unidade-medida.enum';
import { EstoqueService } from '../../services/estoque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formItem: Item = {
    id: 0,
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
    console.log(this.unidadeMedida)
    console.log(this.keys)
  }

  ngOnInit(): void {
    if(this.formItem.unidade === UnidadeMedida.LITRO) {
      this.tipoUnidade = 'lt'
    }
  }

  onSubmit() {
    this.estoqueService.addItem(this.formItem);
    this.router.navigate(['estoque']);
  }

}
