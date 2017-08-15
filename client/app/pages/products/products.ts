import {Component, ViewChild} from "@angular/core";
import {ProductProvider} from "../../providers/product";
import {Product} from "../../entities/product";
import {Router} from "@angular/router";
import {PagerControl} from "../../controls/pager/pager";
@Component({
    selector: 'products-page',
    templateUrl: 'products.html'
})
export class ProductsPage {
    products: Product[];
    count: number;

    @ViewChild(PagerControl)
    pagerControl;

    getProducts() {
        this.provider.selectAll(3, 3).subscribe(products => {
            this.products = products;
        });
        this.provider.count().subscribe(count => {
            this.count = count.count;
            this.pagerControl.pagerInit();
        })
    }


    constructor(private provider: ProductProvider, private router: Router) {
        this.getProducts();
    }

    remove(id) {
        this.provider.remove(id).subscribe(done => {
            console.log(done);
            if (done.result == "ok") {
                this.getProducts();
            }
        })
//внутри subscribe видим что возвращает remove
    }

    edit(id) {
        this.router.navigate(['/edit', id])
    }

}