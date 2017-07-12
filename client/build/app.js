webpackJsonp([1],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
    }
    ProductProvider.prototype.getProducts = function () {
        return this.http.get("api/selectall")
            .map(this.extractData);
    };
    ProductProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductProvider = __decorate([
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */](),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ProductProvider);
    return ProductProvider;
    var _a;
}());



/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(10);



__WEBPACK_IMPORTED_MODULE_2__angular_core__["_22" /* enableProdMode */]();
__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__module__["a" /* InitModule */]);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_default__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_products__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_products_products__["a" /* ProductsPage */] }
];
var InitModule = (function () {
    function InitModule() {
    }
    InitModule = __decorate([
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */]({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__layouts_default__["a" /* DefaultLayout */],
                __WEBPACK_IMPORTED_MODULE_5__pages_products_products__["a" /* ProductsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_product__["a" /* ProductProvider */]],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_1__layouts_default__["a" /* DefaultLayout */]
            ]
        })
    ], InitModule);
    return InitModule;
}());



/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultLayout = (function () {
    function DefaultLayout() {
    }
    DefaultLayout = __decorate([
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */]({
            selector: 'app-content',
            host: { 'class': 'sticky-content' },
            template: "<h1>PriceApp</h1><router-outlet></router-outlet>"
        })
    ], DefaultLayout);
    return DefaultLayout;
}());



/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsPage = (function () {
    function ProductsPage(provider) {
        var _this = this;
        this.provider = provider;
        this.provider.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    }
    ProductsPage = __decorate([
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */]({
            selector: 'products-page',
            template: __webpack_require__(99)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_product__["a" /* ProductProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_product__["a" /* ProductProvider */]) === "function" && _a || Object])
    ], ProductsPage);
    return ProductsPage;
    var _a;
}());



/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Products</h1>\r\n<table>\r\n    <tr>\r\n        <th>Описание:</th>\r\n        <th>Цена:</th>\r\n        <th>Кол:</th>\r\n    </tr>\r\n    <tr *ngFor=\"let product of products\">\r\n        <td>{{product.description}}</td>\r\n        <td>{{product.price}}</td>\r\n        <td>{{product.count}}</td>\r\n    </tr>\r\n</table>\r\n</div>";

/***/ })

},[90]);
//# sourceMappingURL=app.js.map