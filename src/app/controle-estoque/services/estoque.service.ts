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
    let item = JSON.parse(localStorage.getItem('items'));
    return item;
  }

  addItem(newItem) {
     let items = JSON.parse(localStorage.getItem('items'));
     items.push(newItem);
     localStorage.setItem('items', this.stringify(items));
  }

  deleteItem(id) {
    let items = JSON.parse(localStorage.getItem('items'));

    for(let i = 0; i <items.length; i++) {
     if(items[i].id == id) {
       items.splice(i, 1);
     }
    }

    localStorage.setItem('items', JSON.stringify(items));
  }

  updateItem(oldItem, newItem) {
    let items = JSON.parse(localStorage.getItem('items'));

    for(let i = 0; i <items.length; i++) {
     if(items[i].id == oldItem.id) {
       items[i] = newItem;
     }
    }

    localStorage.setItem('items', JSON.stringify(items));
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
