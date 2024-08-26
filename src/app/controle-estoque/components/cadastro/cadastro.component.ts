import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from '../../models/item.interface';
import { UnidadeMedida } from '../../models/unidade-medida.enum';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formItem: Item = {
    id: 0,
    nome: '',
    unidade: UnidadeMedida.LITRO,
    quantidade: 0,
    preco: 0.0,
    perecivel: false,
    validade:'',
    fabricacao:''
  }
  unidadeMedida: UnidadeMedida
  keys: string[]
 

  constructor() { 
    this.keys = Object.keys(UnidadeMedida);
    console.log(this.keys)
  }

  ngOnInit(): void {
  }

}
