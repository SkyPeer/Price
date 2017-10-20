import {Component} from "@angular/core";
import {ProductProvider} from "../../providers/product";
import {Http, Response} from "@angular/http";

@Component({
    selector: 'clients',
    templateUrl: 'client.html',
})

export class ClientsPage {
    constructor(private productProvider:ProductProvider) {

    }
    ngOnInit(){
        let products$ = this.productProvider.selectAll(1,1);
        products$.subscribe( (products)=>{this.products = products } )
    }
    products;

}
