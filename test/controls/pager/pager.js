var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { ProductProvider } from "../../providers/product";
var PagerControl = (function () {
    function PagerControl(productProvider) {
        this.productProvider = productProvider;
        this.kol = 5;
        var that = this;
        this.productProvider.count().subscribe(function (Count) {
            this.countdb = Count.count;
            that.count = Count.count;
            console.log("count1=", that.count);
            return that.count;
        });
    }
    PagerControl.prototype.pagerInit = function () {
        this.pages = [];
        console.log("count2=", this.count);
        this.kol = Math.ceil(this.count / 3);
        console.log("kol=", this.kol);
        for (var i = 1; i < this.kol; i++) {
            this.pages.push(i);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PagerControl.prototype, "count", void 0);
    PagerControl = __decorate([
        Component({
            selector: 'pager',
            templateUrl: 'pager.html'
        }),
        __metadata("design:paramtypes", [ProductProvider])
    ], PagerControl);
    return PagerControl;
}());
export { PagerControl };
