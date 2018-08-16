import { Injectable } from '@angular/core';
import { forEach } from '../../node_modules/@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
class order {
  item: JSON;
  qty: number;
  constructor(item: JSON, qty: number) {
    this.item = item;
    this.qty = qty;
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
      if (newOrder.item["description"] == this.currentCartItems[i].item["description"]) {
        this.currentCartItems[i].qty += newOrder.qty;
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
        this.currentCartItems[i].qty += newOrder.qty;
        break;
      }
    }
    if (i === this.currentCartItems.length) {
      this.currentCartItems.push(newOrder);
    }
    console.log(this.currentCartItems);
  }


}
