import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EstoqueService } from '../../services/estoque.service';
import { Item } from '../../models/item.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit, OnDestroy {
  protected unsub$: Subject<void> = new Subject();
  estoque: Item[] = []

  constructor(private estoqueService: EstoqueService){
    console.log(JSON.parse(localStorage.getItem('itens')), "batata")
  }

  ngOnInit(): void {
    this.getEstoque()

  }

  ngOnDestroy(): void {
      this.unsub$.next();
      this.unsub$.complete();
  }

  getEstoque() {
    this.estoque = this.estoqueService.getItens();
  }

  deleteItem(id) {
    console.log(id)
    for(let i = 0; i < this.estoque.length; i++) {
      if(this.estoque[i].id == id) {
          this.estoque.splice(i, 1);
      }
    }

    this.estoqueService.deleteItem(id);
  }
}
