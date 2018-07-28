import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

/**
 * @Components
 */
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


/**
 * Routes
 */

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomePageComponent },
    { path: 'Shopping', component: ShoppingPageComponent },
    { path: 'Products', component: ProductPageComponent },
    { path: 'Cart', component: CartPageComponent },
    { path: 'Contact', component: ContactPageComponent },
    { path: 'About', component: AboutPageComponent },
    // { path: '**', redirectTo: 'not-found' }
];




/**
 * Router Module Configuration
 */
export const router: ModuleWithProviders = RouterModule.forRoot(routes);
