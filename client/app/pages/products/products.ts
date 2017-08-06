import {Component} from "@angular/core";
import {ProductProvider} from "../../providers/product";
import {Product} from "../../entities/product";
import {Router} from "@angular/router";
@Component({
    selector: 'products-page',
    templateUrl: 'products.html'
})
export class ProductsPage {
    products: Product[];
    getProducts(){ this.provider.selectAll().subscribe(products => {
        this.products = products;
    });}

    constructor(private provider: ProductProvider, private router: Router) {
       this.getProducts();
    }
    remove(id) {
        this.provider.remove(id).subscribe(done => {
            console.log(done);
            if (done.result=="ok"){
                this.getProducts();
            }
        })
//внутри subscribe видим что возвращает remove
    }
    edit(id) {
        this.router.navigate(['/edit', id])
    }

}