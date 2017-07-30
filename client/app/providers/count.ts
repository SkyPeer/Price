import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";
import {count} from "rxjs/operator/count";
@Injectable()
export class CountProvider
{
    //http:Http; вместо этого пишем private в конструкторе
    constructor(private  http: Http) {
        //this.http = http; не пишем потому что автоматом создался
    }

}

