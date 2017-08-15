import {Component, Input} from "@angular/core";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
@Component({
    selector: 'pager',
    templateUrl: 'pager.html'
})
export class PagerControl{

    @Input()
    count: number = 4;
    pages: number [];
    kol: number = 5;


    pagerInit(){
        this.pages = [];
        this.kol = Math.ceil(14 / 3);
        for (let i = 1; i < this.kol;  i++){
            this.pages.push(i);
        }
    }

}
