import { Injectable } from '@angular/core';
import { forEach } from '../../node_modules/@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
class order {
  item: JSON;
  count: number;
  constructor(item: JSON, count: number) {
    this.item = item;
    this.count = count;
  }
}
export class CartService {
  public currentCartItems: order[] = []




  constructor() {

  }

  addItemToCart(item: JSON, quantity: number) {
    let newOrder: order = new order(item, quantity);
    let i = 0;
    for (i = 0; i < this.currentCartItems.length; i++) {
      if (newOrder.item === this.currentCartItems[i].item) {
        this.currentCartItems[i].count += newOrder.count;
        break;
      }
    }
    if (i === this.currentCartItems.length) {
      this.currentCartItems.push(newOrder);
    }
    console.log(this.currentCartItems);
  }


  removeItemFromCart(item: JSON, quantity: number) {
    let newOrder: order = new order(item, quantity);
    
    let i = 0;
    for (i = 0; i < this.currentCartItems.length; i++) {
      if (newOrder.item === this.currentCartItems[i].item) {
        this.currentCartItems[i].count += newOrder.count;
        break;
      }
    }
    if (i === this.currentCartItems.length) {
      this.currentCartItems.push(newOrder);
    }
    console.log(this.currentCartItems);
  }


}
