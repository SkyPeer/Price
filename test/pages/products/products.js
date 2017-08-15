var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { ProductProvider } from "../../providers/product";
import { Router } from "@angular/router";
import { PagerControl } from "../../controls/pager/pager";
var ProductsPage = (function () {
    function ProductsPage(provider, router) {
        this.provider = provider;
        this.router = router;
        this.getProducts();
    }
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.provider.selectAll(3, 3).subscribe(function (products) {
            _this.products = products;
        });
        this.provider.count().subscribe(function (count) {
            _this.count = count.count;
            _this.pagerControl.pagerInit();
        });
    };
    ProductsPage.prototype.remove = function (id) {
        var _this = this;
        this.provider.remove(id).subscribe(function (done) {
            console.log(done);
            if (done.result == "ok") {
                _this.getProducts();
            }
        });
    };
    ProductsPage.prototype.edit = function (id) {
        this.router.navigate(['/edit', id]);
    };
    __decorate([
        ViewChild(PagerControl),
        __metadata("design:type", Object)
    ], ProductsPage.prototype, "pagerControl", void 0);
    ProductsPage = __decorate([
        Component({
            selector: 'products-page',
            templateUrl: 'products.html'
        }),
        __metadata("design:paramtypes", [ProductProvider, Router])
    ], ProductsPage);
    return ProductsPage;
}());
export { ProductsPage };
