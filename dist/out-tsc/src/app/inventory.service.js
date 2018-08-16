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
var http_1 = require("@angular/common/http");
/**
 * This Service fetches inventory data from the server.
 */
var InventoryService = /** @class */ (function () {
    // public finishedFetching:boolean=false;
    function InventoryService(http) {
        this.http = http;
        this.currentInventory = null;
        this.currentInventory = this.http.get("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json");
    }
    InventoryService.prototype.fetchInventory = function () {
        // .subscribe((response) => { this.currentInventory = JSON.parse(JSON.stringify(response));this.finishedFetching=true; });
    };
    InventoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map