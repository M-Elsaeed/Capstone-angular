import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  itemToDisplay = undefined;
  selectedQuantity: number = 1;
  constructor(public Inventory: InventoryService,
    public activatedRoute: ActivatedRoute,
    public Cart: CartService,
    public Router: Router,
    public location: Location) {

    this.activatedRoute.queryParams.subscribe(params => {
      let param1;
      let param2;
      let param3;
      param1 = params['ind'];
      param2 = params['subCatInd'];
      param3 = params['itemInd'];
      this.Inventory.currentInventory.subscribe((response) => {
        this.itemToDisplay = response[param1].subcategories[param2].items[param3];
        console.log(this.itemToDisplay.stock);
      })
    });
  }

  ngOnInit() {

  }
}
