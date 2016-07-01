import {Component} from '@angular/core';
import { MapComponent } from './map.component';
import { CarouselComponent } from './carousel.component';
@Component({
    selector: 'my-app',
    directives: [MapComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/sass/app.component.scss']
})
export class AppComponent { }
