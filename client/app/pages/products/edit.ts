import {Component} from '@angular/core';
import {Product} from "../../entities/product";
import {ProductProvider} from "../../providers/product";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: 'product-edit',
    templateUrl: 'edit.html'
})

export class ProductEditPage {
    product: Product=new Product();

    constructor(private productProvider: ProductProvider,
                private route: ActivatedRoute) {
        this.route.paramMap.subscribe(paramMap => {
            let id = paramMap.params.productId;
            // paramMap.get("productId")
            this.productProvider.select(id).subscribe(product => {
                this.product = product;
            })
        });


    }
    update(product) {
        this.productProvider.update(product).subscribe(response => {
            console.log(response)
        })

    }

}


