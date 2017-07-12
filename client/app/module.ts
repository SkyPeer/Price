import {NgModule} from "@angular/core";
import {DefaultLayout} from "./layouts/default";
import {BrowserModule} from "@angular/platform-browser";
//import {PagesModule} from "./pages/module";
//import {ControlsModule} from "./controls/module";
//import {RoutingModule} from "./routes";
import {FormsModule} from "@angular/forms";
import {ProductProvider} from "./providers/product";
import {RouterModule, Routes} from "@angular/router";
import {ProductsPage} from "./pages/products/products";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
    { path: '', component: ProductsPage }
];

@NgModule({
    declarations: [
        DefaultLayout,
        ProductsPage
    ],
    imports: [
        BrowserModule,HttpModule,
        RouterModule.forRoot(appRoutes)
        //PagesModule,
        //RoutingModule
    ],
    providers: [ProductProvider],
    bootstrap: [
        DefaultLayout
    ]
})
export class InitModule {

}
