import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Product} from "../entities/product";
import {Observable} from "rxjs/Observable";
@Injectable()
export class ProductProvider
{
    constructor(private http: Http){

    }
    getProducts(): Observable<Product[]> {
        return this.http.get("api/selectall")
                        .map(this.extractData)
    }
    private extractData(res: Response) {
        let body = res.json();
        return body as Product[] || { };
    }
}

