import {Component, Input} from "@angular/core";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CountPage} from "../../pages/products/count";
import {count} from "rxjs/operator/count";
import {ProductProvider} from "../../providers/product";
@Component({
    selector: 'pager',
    templateUrl: 'pager.html'
})
export class PagerControl{

    @Input()
    count: number;
    pages: number [];
    kol: number;

    constructor(private productProvider: ProductProvider) {
        let that = this;
        this.productProvider.getCount().subscribe(function (Count) {
            this.countdb = Count.count;
            that.count = Count.count;
            console.log("count1=",that.count);
            return that.count;

        });
    }


    pagerInit(count){
        this.pages = [];
       console.log("count2=",count);
        this.kol = Math.ceil(count / 3);
        console.log("kol=",this.kol);
        for (let i = 1; i < this.kol;  i++){
            this.pages.push(i);
        }
    }

}
