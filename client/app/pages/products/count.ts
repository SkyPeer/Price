import {Component} from "@angular/core";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'countdb-page',
    templateUrl: 'count.html'
})
export class CountPage {
    countdb: number = 0;

    constructor(private productProvider: ProductProvider) {
        //this.countdb = 3;
        let that = this;
        this.productProvider.count().subscribe(function (count) {
            this.countdb = count.count;
            that.countdb = count.count;
        })
    }

}



