import {Component} from "@angular/core";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'countdb-page',
    templateUrl: 'count.html'
})
export class CountPage {
    countdb: number = 0;
    constructor(private productProvider: ProductProvider) {

        let that = this;
        this.productProvider.getCount().subscribe(function (count) {
            this.countdb = count.count;
            that.countdb = count.count;
            console.log(that.countdb);
        });

    }

}



