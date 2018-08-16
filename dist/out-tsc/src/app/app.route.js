"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
/**
 * @Components
 */
var home_page_component_1 = require("./home-page/home-page.component");
var shopping_page_component_1 = require("./shopping-page/shopping-page.component");
var product_page_component_1 = require("./product-page/product-page.component");
var cart_page_component_1 = require("./cart-page/cart-page.component");
var contact_page_component_1 = require("./contact-page/contact-page.component");
var about_page_component_1 = require("./about-page/about-page.component");
/**
 * Routes
 */
var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: home_page_component_1.HomePageComponent },
    { path: 'Shopping', component: shopping_page_component_1.ShoppingPageComponent },
    { path: 'Products', component: product_page_component_1.ProductPageComponent },
    { path: 'Cart', component: cart_page_component_1.CartPageComponent },
    { path: 'Contact', component: contact_page_component_1.ContactPageComponent },
    { path: 'About', component: about_page_component_1.AboutPageComponent },
];
/**
 * Router Module Configuration
 */
exports.router = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.route.js.map