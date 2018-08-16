"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// Link for the json containing current inventory.
// https://webmppcapstone.blob.core.windows.net/data/itemsdata.json
/**
 * Components
 */
var app_component_1 = require("./app.component");
var cart_pipe_1 = require("./cart.pipe");
var home_page_component_1 = require("./home-page/home-page.component");
var shopping_page_component_1 = require("./shopping-page/shopping-page.component");
var product_page_component_1 = require("./product-page/product-page.component");
var cart_page_component_1 = require("./cart-page/cart-page.component");
var contact_page_component_1 = require("./contact-page/contact-page.component");
var about_page_component_1 = require("./about-page/about-page.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
/**
 * Services
 */
var inventory_service_1 = require("./inventory.service");
/**
 * Directives
 */
/**
 * Pipes
 */
/**
 * Router
 */
var app_route_1 = require("./app.route");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cart_pipe_1.CartPipe,
                home_page_component_1.HomePageComponent,
                shopping_page_component_1.ShoppingPageComponent,
                product_page_component_1.ProductPageComponent,
                cart_page_component_1.CartPageComponent,
                contact_page_component_1.ContactPageComponent,
                about_page_component_1.AboutPageComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_route_1.router,
                http_1.HttpClientModule
            ],
            providers: [
                inventory_service_1.InventoryService
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map