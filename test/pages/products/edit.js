var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Product } from "../../entities/product";
import { ProductProvider } from "../../providers/product";
import { ActivatedRoute } from "@angular/router";
var ProductEditPage = (function () {
    function ProductEditPage(productProvider, route) {
        var _this = this;
        this.productProvider = productProvider;
        this.route = route;
        this.product = new Product();
        this.route.paramMap.subscribe(function (paramMap) {
            var id = paramMap.params.productId;
            _this.productProvider.select(id).subscribe(function (product) {
                _this.product = product;
            });
        });
    }
    ProductEditPage.prototype.update = function (product) {
        this.productProvider.update(product).subscribe(function (response) {
            console.log(response);
        });
    };
    ProductEditPage = __decorate([
        Component({
            selector: 'product-edit',
            templateUrl: 'edit.html'
        }),
        __metadata("design:paramtypes", [ProductProvider,
            ActivatedRoute])
    ], ProductEditPage);
    return ProductEditPage;
}());
export { ProductEditPage };
