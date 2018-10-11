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
import { LoginComponent } from './login/login.component';
import { AuthGuardService, LoginPageAuthGuard } from './auth-guard.service';


/**
 * Routes
 */

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomePageComponent },
    { path: 'Login', component: LoginComponent, canActivate: [LoginPageAuthGuard] },
    { path: 'Shopping', component: ShoppingPageComponent },
    { path: 'Products', component: ProductPageComponent },
    { path: 'Cart', component: CartPageComponent, canActivate: [AuthGuardService] },
    { path: 'Contact', component: ContactPageComponent },
    { path: 'About', component: AboutPageComponent },
    //{ path: '**', redirectTo: HomePageComponent }
];



// const routes = [
//     { path: '', component: NavigateComponent },
//     { path: 'field', component: FieldComponent },
//     { path: 'book', component: MaterialFullComponent, children: [
//       { path: '', redirectTo: '', pathMatch: 'full' },
//       { path: ':id_book', component: MaterialFullComponent }
//     ] },
//     { path: 'edit', component: MaterialEditComponent, children: [
//       { path: '', redirectTo: '', pathMatch: 'full' },
//       { path: 'new', component: MaterialEditComponent },
//       { path: ':id', component: MaterialEditComponent }
//     ] },
//     { path: '**', redirectTo: '/'}
//     ];



/**
 * Router Module Configuration
 */
export const router: ModuleWithProviders = RouterModule.forRoot(routes);
