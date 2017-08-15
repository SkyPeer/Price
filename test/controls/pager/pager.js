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
var PagerControl = (function () {
    function PagerControl() {
        this.count = 4;
        this.kol = 5;
    }
    PagerControl.prototype.pagerInit = function () {
        this.pages = [];
        this.kol = Math.ceil(14 / 3);
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
        })
    ], PagerControl);
    return PagerControl;
}());
export { PagerControl };
