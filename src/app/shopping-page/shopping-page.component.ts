import { Component, OnInit, OnDestroy } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit , OnDestroy {
  public inventory = [];
  public allItems = [];
  public sortedItems = [];
  public cat = undefined;
  public subCat = undefined;
  public isStockOnly = false;
  public sortingMode = "none";
  public showSideBar = false;
  public pageNum: number = 1;

  public showSubs = {
    "Household and Beauty": false,
    "Pantry Items": false,
    "Perishables": false,
    "Produce": false,
  };


  public toggleSidePanel(fixedSidePanel) {

    this.showSideBar = !this.showSideBar;
    if (fixedSidePanel.style.width == "25%") {
      fixedSidePanel.style.width = "0";
      fixedSidePanel.style.padding = "0";
    }
    else {
      fixedSidePanel.style.width = "25%";
      fixedSidePanel.style.padding = "10px";
    }
  }

  public navigateToSelf(params) {
    this.Router.navigateByUrl('/Shopping?' + params);
  }

  public filterSortItems() {
    this.sortedItems = this.allItems;
    if (this.subCat !== undefined)
      this.sortedItems = this.sortedItems.filter((item) => { return item.subcategory.toLowerCase() === this.subCat.toLowerCase() ? true : false; });
    if (this.cat !== undefined)
      this.sortedItems = this.sortedItems.filter((item) => { return item.category.toLowerCase() === this.cat.toLowerCase() ? true : false; });
    if (this.isStockOnly === true) {
      this.sortedItems = this.sortedItems.filter((item) => { return +item.stock === 0 ? false : true; });
    }
    switch (this.sortingMode) {
      case "price":
        this.sortedItems.sort((item1, item2) => {
          return parseFloat(item1.price) - parseFloat(item2.price);
        });
        break;
      case "alphabetical":
        this.sortedItems.sort((item1, item2) => {
          return (item1.name.toLowerCase() < item2.name.toLowerCase()) ?
            -1 : (item1.name.toLowerCase() > item2.name.toLowerCase()) ?
              1 : 0;
        });
        break;
      case "rating":
        this.sortedItems.sort((item1, item2) => {
          return parseFloat(item2.rating) - parseFloat(item1.rating);
        });
        break;
      default:
      // console.log("no sorting");

    }
  }


  public expandCategory(panel) {
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";

    }
  }

  public updateDisplayedItems() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.cat = params['cat'];
      this.subCat = params['subCat'];
      this.filterSortItems();
    });
  }

  public getAllItems() {
    let myItemsArray: JSON[] = [];
    this.inventory.
      forEach((category) => {
        category["subcategories"].
          forEach((subCategory) => {
            subCategory["items"].
              forEach((item) => {
                myItemsArray.push(item)
              });
          });
      });
    return myItemsArray;
  }


  public logDis(x) {
    console.log(x);
  }


  constructor(public Inventory: InventoryService,
    public Router: Router,
    public activatedRoute: ActivatedRoute,
    public Cart: CartService
  ) {
  }
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.Router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));


    this.Inventory.currentInventory.subscribe((response) => {
      this.inventory = response;
      this.sortedItems = this.allItems = this.getAllItems();
      this.updateDisplayedItems();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
