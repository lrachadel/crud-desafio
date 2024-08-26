import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor( private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Item[]>('http://localhost:3000/data')
  }
}
