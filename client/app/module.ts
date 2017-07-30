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

const appRoutes: Routes = [
    { path: '', component: ProductsPage },
    { path: 'count', component: CountPage},
    { path: 'add', component: ProductAddPage}

];

@NgModule({
    declarations: [
        DefaultLayout,
        ProductsPage,
        CountPage,
        ProductAddPage
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
