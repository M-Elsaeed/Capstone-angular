import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  togglerString:String = "Stop Slide Show"
  togglerBtnClasses: string = "btn btn-danger";

  


  toggleCarousel() {
    let carouselRef: any = $('.carousel');

    this.togglerBtnClasses = this.togglerBtnClasses === "btn btn-success" ? "btn btn-danger" : "btn btn-success";

    if (this.togglerBtnClasses === "btn btn-danger") {
      this.togglerString="Stop Slide Show";
      carouselRef.carousel('cycle');
    }
    else {
      this.togglerString="Resume Slide Show";
      carouselRef.carousel('pause');
    }

  }
  constructor(private Inventory: InventoryService
  ) { }

  ngOnInit() {
    
  }

}
