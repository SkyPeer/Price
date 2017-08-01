import {Component} from '@angular/core';
import {Product} from "../../entities/product";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'product-remove',
    templateUrl: 'remove.html'
})

export class ProductRemovePage {
    product: Product = {
      description: "1",
        price: 1,
        count: 1,

    };
    constructor(private productProvider: ProductProvider) {

    }
        remove(product){
            this.productProvider.remove(product).subscribe(response => {
                console.log(response)
            });
        }

}

// https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp