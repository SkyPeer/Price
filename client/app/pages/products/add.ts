import {Component} from '@angular/core';
import {Product} from "../../entities/product";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'product-add',
    templateUrl: 'add.html'
})

export class ProductAddPage {
    product: Product = {
        description: "0",
        price: 500,
        count: 1

    };
    constructor(private productProvider: ProductProvider) {

    }

    add(product) {
        this.productProvider.insert(product).subscribe(response => {
            console.log(response)
        })
    }
}


