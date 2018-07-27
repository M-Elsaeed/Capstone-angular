import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
