import {Component} from '@angular/core';
import {Product} from "../../entities/product";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'product-add',
    templateUrl: 'add.html'
})

export class ProductAddPage {
    product: Product = {
        description:'1',
        price:0,
        count:0
    };

    constructor(private productProvider: ProductProvider) {

    }

    add(product) {
        this.productProvider.insert(product).subscribe(response => {
            console.log(response)
        })
    }
}


