import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Product} from "../entities/product";
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";
@Injectable()
export class ProductProvider
{
    constructor(private http: Http){

    }
    selectAll(): Observable<Product[]> {
        return this.http.get("api/product/selectAll")
                        .map(this.extractData)
    }
    private extractData(res: Response) {
        let body = res.json();
        return body as Product[] || { };
    }
    count() {
        return this.http.get("api/product/count").map(res => {
            return res.json();
        })
    }
    insert(product){
        return this.http.post("api/product/insert", product).map(res => {
            return res.json();})
    }
    remove(product){
        return this.http.post("api/product/remove", product).map(res=> {
            return res.json();})
    }

}



