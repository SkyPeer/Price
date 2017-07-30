import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InitModule } from "./module";
import { enableProdMode } from "@angular/core";
enableProdMode();
platformBrowserDynamic().bootstrapModule(InitModule);
