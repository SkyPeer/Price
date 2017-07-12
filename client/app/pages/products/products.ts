import {Component} from "@angular/core";
import {ProductProvider} from "../../providers/product";
import {Product} from "../../entities/product";
@Component({
    selector: 'products-page',
    templateUrl:'products.html'
})
export class ProductsPage{
    products:Product[];
    constructor(private provider: ProductProvider){
        this.provider.getProducts().subscribe(products=>{
            this.products = products;
        })
    }
}
