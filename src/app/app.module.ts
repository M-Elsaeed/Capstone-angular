import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule}	from '@angular/common';


import * as $ from 'jquery';
// Link for the json containing current inventory.
// https://webmppcapstone.blob.core.windows.net/data/itemsdata.json


/**
 * Components
 */
import { AppComponent } from './app.component';
import { CartPipe } from './cart.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

/**
 * Services
 */
import { InventoryService } from './inventory.service'


/**
 * Directives
 */


/**
 * Pipes
 */


/**
 * Router
 */

import { router } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    CartPipe,
    HomePageComponent,
    ShoppingPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule
  ],
  providers: [
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
