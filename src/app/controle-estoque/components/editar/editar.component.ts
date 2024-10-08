import { Component, OnInit, ViewChild } from '@angular/core';
import { UnidadeMedida } from '../../models/unidade-medida.enum';
import { v4 as uuid } from 'uuid';
import { Item } from '../../models/item.interface';
import { NgForm } from '@angular/forms';
import { EstoqueService } from '../../services/estoque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @ViewChild('formItem') formItem: NgForm
    
  item: Item
  perecivel = false
  tipoUnidade: string
  unidadeMedida = UnidadeMedida
  keys: string[]
  data = new Date()
  naValidade: string
  fabricacaoFutura = false
  fabricacaoValidade = false
  id: string

  constructor(private _Activatedroute:ActivatedRoute, private estoqueService: EstoqueService, private router: Router) {}

  ngOnInit(): void {
    this.getItem()
    this.keys = Object.keys(UnidadeMedida);
    this.onChangeUnidade(this.item.unidade)
  }

  onSubmit() {
    if( !this.fabricacaoFutura || !this.fabricacaoValidade ) {
      this.estoqueService.updateItem(this.item, this.formItem.form.value);
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

  getItem() {
    this.id = this._Activatedroute.snapshot.params['id'];
    const itens = this.estoqueService.getItens();
    this.item = itens.find(iten => iten.id==this.id);
  }
}
