import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default";
import {BrowserModule} from "@angular/platform-browser";
//import {PagesModule} from "./pages/module";
//import {ControlsModule} from "./controls/module";
//import {RoutingModule} from "./routes";
import {FormsModule} from "@angular/forms";
import {ProductProvider} from "./providers/product";
import {CountProvider} from "./providers/count";
import {RouterModule, Routes} from "@angular/router";
import {ProductsPage} from "./pages/products/products";
import {HttpModule} from "@angular/http";
import {CountPage} from "./pages/products/count";
import {ProductAddPage} from "./pages/products/add";
import {ProductRemovePage} from "./pages/products/remove"
import {ProductEditPage} from "./pages/products/edit";
import {PagerControl} from "./controls/pager/pager";
import {ClientsPage} from "./pages/products/client";

const appRoutes: Routes = [
    { path: '', component: ClientsPage },
    { path: 'admin', component: ProductsPage },
    { path: 'admin/count', component: CountPage},
    { path: 'admin/add', component: ProductAddPage},
    { path: 'admin/remove', component: ProductRemovePage},
    { path: 'admin/edit/:productId', component: ProductEditPage},
];

@NgModule({
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
        //PagesModule,
        //RoutingModule
    ],
    providers: [ProductProvider, CountProvider],
    bootstrap: [DefaultLayout]
})
export class InitModule {

}
