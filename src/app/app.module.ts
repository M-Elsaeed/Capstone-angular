import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import * as $ from 'jquery';
// Link for the json containing current inventory.
// https://webmppcapstone.blob.core.windows.net/data/itemsdata.json


/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

/**
 * Services
 */
import { RndNumService } from './rnd-num.service';
import { InventoryService } from './inventory.service';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { AuthGuardService,LoginPageAuthGuard } from './auth-guard.service';



/**
 * Directives
 */


/**
 * Pipes
 */
import { NgxPaginationModule } from 'ngx-pagination';


/**
 * Router
 */

import { router } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoppingPageComponent,
    ProductPageComponent,
    CartPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    RndNumService,
    InventoryService,
    CartService,
    AuthService,
    AuthGuardService,
    LoginPageAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
