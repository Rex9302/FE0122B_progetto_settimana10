import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  items:Product[] = []

  sub = new Subject<number>();
  empty = new Subject<Product[]>()
  counter = 0

  constructor() { }

  addToCart(x:Product){
    this.items.push(x)
  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items.length = 0
    this.counter = 0
    this.sub.next(this.counter)
    this.empty.next(this.items)
  }
  conta(){
    this.counter++;
    this.sub.next(this.counter)
  }

  remove(id:number){
    this.items.splice(id,1)
    this.counter--
    this.sub.next(this.counter)
  }

}
