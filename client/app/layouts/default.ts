import {Component} from "@angular/core";


@Component({
    selector: 'app-content',
    host:{'class':'sticky-content'},
    template: `<h1>PriceApp</h1><router-outlet></router-outlet>`
})
export class DefaultLayout {

}
