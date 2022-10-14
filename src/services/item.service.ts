import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 10,
      quantity: 4,
      completed: true
    },
    {
      id: 1,
      title: 'Palta',
      price: 35,
      quantity: 2,
      completed: false
    },
    {
      id: 2,
      title: 'Lechuga',
      price: 15,
      quantity: 2,
      completed: false
    }
  ];
  

  constructor() { }

  getItems() {
    return this.item
  }
  addItem(item: Item) {
    this.item.unshift(item);

  }
}
