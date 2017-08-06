"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
    }
    ProductProvider.prototype.selectAll = function () {
        return this.http.get("api/product/selectAll")
            .map(this.extractData);
    };
    ProductProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductProvider.prototype.count = function () {
        return this.http.get("api/product/count").map(function (res) {
            return res.json();
        });
    };
    ProductProvider.prototype.insert = function (product) {
        return this.http.post("api/product/insert", product).map(function (res) {
            return res.json();
        });
    };
    ProductProvider.prototype.remove = function (id) {
        return this.http.post("api/product/remove", { id: id }).map(function (res) {
            return res.json();
        });
    };
    ProductProvider = __decorate([
        core_1.Injectable()
    ], ProductProvider);
    return ProductProvider;
}());
exports.ProductProvider = ProductProvider;
