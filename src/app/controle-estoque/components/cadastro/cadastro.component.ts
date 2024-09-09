import { Component, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Item } from '../../models/item.interface';
import { UnidadeMedida } from '../../models/unidade-medida.enum';
import { EstoqueService } from '../../services/estoque.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('formItem') formItem: NgForm
    
  item: Item = {
    id: uuid(),
    nome: null,
    unidade: UnidadeMedida.Litro,
    quantidade: null,
    preco: null,
    perecivel: false,
    validade: null,
    fabricacao: null
  }

  perecivel = false
  tipoUnidade: string
  unidadeMedida = UnidadeMedida
  keys: string[]
  data = new Date()
  naValidade: string
  fabricacaoFutura = false
  fabricacaoValidade = false

  constructor( private estoqueService: EstoqueService, private router: Router) {}

  ngOnInit(): void {
    this.keys = Object.keys(UnidadeMedida);
    this.onChangeUnidade(this.item.unidade);
  }

  onSubmit() {
    if( !this.fabricacaoFutura || !this.fabricacaoValidade ) {
      this.estoqueService.addItem(this.item);
      this.router.navigate(['estoque']);
    }
  }

  onCancel() {
    this.router.navigate(['estoque']);
  }

  onChangeUnidade(key) {
    switch (key){
      case 'Litro':
        this.tipoUnidade = 'lt'
        break;
      case 'Quilograma':
        this.tipoUnidade = 'kg'
        break;
      case 'Unidade':
        this.tipoUnidade = 'un'
    }
  }

  onChangePerecivel(event) {
    this.perecivel = event.checked
  }

  onChangeValidade(event: string) {
    const selectDay = +event.slice(-2)

    if (selectDay < this.data.getDate()) {
      this.naValidade = 'Fora da Validade'
    } else {
      this.naValidade = 'Dentro da Validade'
    }
  }

  onChangeFabricacao(event: string) {
    const selectDay = +event.slice(-2)

    this.fabricacaoFutura = selectDay  > this.data.getDate()
    if (this.perecivel) {
      this.fabricacaoValidade = selectDay > this.item.validade.getDate()
    }
  }

}
