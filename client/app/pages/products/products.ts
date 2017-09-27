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
    pagerControl1;

    getProducts() {
        this.provider.selectAll(3, 3).subscribe(products => {
            this.products = products;
        });
        this.provider.getCount().subscribe(response => {
            this.pagerControl1.pagerInit(response.count);
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