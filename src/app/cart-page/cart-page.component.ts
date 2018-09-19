import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { RndNumService } from '../rnd-num.service';
import { InventoryService } from '../inventory.service';
import { Router } from '../../../node_modules/@angular/router';
import { fade } from 'src/animations'
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  animations: [fade]
})
export class CartPageComponent implements OnInit {
  showCheckoutForm = true;
  constructor(private Cart: CartService,
    private Random: RndNumService,
    private Inventory: InventoryService,
    private Router: Router) {

  }


  ngOnInit() {
  }

  logDis(abc) {
    console.log(abc);
  }

  scrollTop(x) {
    let d = x.scrollTop / 30;
    console.log(x.scrollTop);
    console.log(d);
    let myTimer = setInterval(() => {
      x.scrollTop -= d;
    }, 10);

    setTimeout(() => {
      clearInterval(myTimer);
    }, 300);

  }

  getCartSummary() {
    let subTotal = 0;
    for (let i = 0; i < this.Cart.currentCartItems.length; i++) {
      subTotal += this.Cart.currentCartItems[i].item['price'] * this.Cart.currentCartItems[i].qty;
    }
    let shipping = this.Cart.shippingRate;
    let tax = (subTotal + shipping) * 0.1;
    return { "subTotal": subTotal, "shipping": shipping, "tax": tax, "grandTotal": subTotal + shipping + tax };
  }


}
