import {Component} from '@angular/core';
import { MapComponent } from './map.component';
@Component({
    selector: 'my-app',
    directives: [MapComponent],
    template: '<my-map></my-map>'
})
export class AppComponent { }
