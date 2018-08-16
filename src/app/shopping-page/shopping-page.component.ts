import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { RndNumService } from '../rnd-num.service';
import { DataPassingService } from '../data-passing.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  private inventory;
  private showSideBar = false;

  constructor(private Inventory: InventoryService,
    private Random: RndNumService,
    private Passer: DataPassingService,
    private Router: Router

  ) { }

  ngOnInit() {
    this.Inventory.currentInventory.subscribe((response) => {
      this.inventory = response;
      this.showSideBar = true;
    });
  }


}
