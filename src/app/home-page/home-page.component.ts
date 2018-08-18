import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { RndNumService } from '../rnd-num.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  togglerString: String = "Stop Slide Show"
  togglerBtnClasses: string = "btn btn-danger centered-element";
  inventory = undefined;
  ithItem: number = 0;
  randomItems = [];


  toggleCarousel() {
    let carouselRef: any = $('.carousel');

    this.togglerBtnClasses = this.togglerBtnClasses === "btn btn-success centered-element" ? "btn btn-danger centered-element" : "btn btn-success centered-element";

    if (this.togglerBtnClasses === "btn btn-danger centered-element") {
      this.togglerString = "Stop Slide Show";
      carouselRef.carousel('cycle');
    }
    else {
      this.togglerString = "Resume Slide Show";
      carouselRef.carousel('pause');
    }

  }


  constructor(private Inventory: InventoryService,
    private Random: RndNumService,
    private Router: Router
  ) {


  }

  ngOnInit() {

    this.Inventory.currentInventory.subscribe((response) => {
      this.inventory = response;
      for (let i = 0; i < 9; i++) {
        let rand = this.Random.randomInt(0, 3);
        let subCat = this.Random.randomInt(0, response[rand].subcategories.length - 1);
        let itemRnd = this.Random.randomInt(0, response[rand].subcategories[subCat].items.length - 1);

        this.randomItems.push(this.inventory[rand].subcategories[subCat].items[itemRnd]);
      }
    });

  }



}
