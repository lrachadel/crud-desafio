import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Init } from './estoque-init';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService extends Init{

  constructor() {
    super();
    this.load()
    console.log
  }

  getItens() {
    let item = JSON.parse(localStorage.getItem('itens'));
    return item;
  }

  addItem(newItem) {
     let itens = JSON.parse(localStorage.getItem('itens'));
     itens.push(newItem);
     localStorage.setItem('itens', this.stringify(itens));
  }

  deleteItem(id) {
    let itens = JSON.parse(localStorage.getItem('itens'));

    for(let i = 0; i <itens.length; i++) {
     if(itens[i].id == id) {
       itens.splice(i, 1);
     }
    }

    localStorage.setItem('itens', JSON.stringify(itens));
  }

  updateItem(oldItem, newItem) {
    let itens = JSON.parse(localStorage.getItem('itens'));

    for(let i = 0; i <itens.length; i++) {
     if(itens[i].id == oldItem.id) {
       itens[i] = newItem;
     }
    }

    localStorage.setItem('itens', JSON.stringify(itens));
  }

  stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    });
    cache = null;
    return str;
  }
}
