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
var core_1 = require("@angular/core");
var inventory_service_1 = require("../inventory.service");
var rnd_num_service_1 = require("../rnd-num.service");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(Inventory, Random) {
        this.Inventory = Inventory;
        this.Random = Random;
        this.togglerString = "Stop Slide Show";
        this.togglerBtnClasses = "btn btn-danger centered-element";
        this.inventory = undefined;
        this.randomItems = [];
    }
    HomePageComponent.prototype.toggleCarousel = function () {
        var carouselRef = $('.carousel');
        this.togglerBtnClasses = this.togglerBtnClasses === "btn btn-success centered-element" ? "btn btn-danger centered-element" : "btn btn-success centered-element";
        if (this.togglerBtnClasses === "btn btn-danger centered-element") {
            this.togglerString = "Stop Slide Show";
            carouselRef.carousel('cycle');
        }
        else {
            this.togglerString = "Resume Slide Show";
            carouselRef.carousel('pause');
        }
    };
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Inventory.currentInventory.subscribe(function (response) {
            _this.inventory = response;
            for (var i = 0; i < 9; i++) {
                var rand = _this.Random.randomInt(0, 3);
                var subCat = _this.Random.randomInt(0, response[rand].subcategories.length - 1);
                var itemRnd = _this.Random.randomInt(0, response[rand].subcategories[subCat].items.length - 1);
                _this.randomItems.push(rand);
                _this.randomItems.push(subCat);
                _this.randomItems.push(itemRnd);
            }
        });
    };
    HomePageComponent.prototype.do = function () {
    };
    HomePageComponent.prototype.getRandomItem = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        __metadata("design:paramtypes", [inventory_service_1.InventoryService,
            rnd_num_service_1.RndNumService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map