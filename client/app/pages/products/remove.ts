import {Component} from '@angular/core';
import {Product} from "../../entities/product";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'product-remove',
    templateUrl: 'remove.html'
})

export class ProductRemovePage {
    product: Product = {
      description: "12312",
        price: 0,
        count: 0,

    };
    constructor(private productProvider: ProductProvider) {

    }
        remove(product){
            this.productProvider.remove(product).subscribe(response => {
                console.log(response)
            });
        }

}

