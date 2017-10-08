var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { DefaultLayout } from "./layouts/default";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ProductProvider } from "./providers/product";
import { CountProvider } from "./providers/count";
import { RouterModule } from "@angular/router";
import { ProductsPage } from "./pages/products/products";
import { HttpModule } from "@angular/http";
import { CountPage } from "./pages/products/count";
import { ProductAddPage } from "./pages/products/add";
import { ProductRemovePage } from "./pages/products/remove";
import { ProductEditPage } from "./pages/products/edit";
import { PagerControl } from "./controls/pager/pager";
import { ClientsPage } from "./pages/products/client";
var appRoutes = [
    { path: '', component: ClientsPage },
    { path: 'admin', component: ProductsPage },
    { path: 'admin/count', component: CountPage },
    { path: 'admin/add', component: ProductAddPage },
    { path: 'admin/remove', component: ProductRemovePage },
    { path: 'admin/edit/:productId', component: ProductEditPage },
];
var InitModule = (function () {
    function InitModule() {
    }
    InitModule = __decorate([
        NgModule({
            declarations: [
                DefaultLayout,
                ProductsPage,
                CountPage,
                ProductAddPage,
                ProductRemovePage,
                ProductEditPage,
                PagerControl,
                ClientsPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                FormsModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [ProductProvider, CountProvider],
            bootstrap: [DefaultLayout]
        })
    ], InitModule);
    return InitModule;
}());
export { InitModule };
