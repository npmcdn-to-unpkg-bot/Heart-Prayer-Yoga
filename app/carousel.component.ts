import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from '../node_modules/ng2-bootstrap';

@Component({
selector: 'carousel',
directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
templateUrl: 'app/carousel.component.html'
})
export class CarouselComponent {
public myInterval:number = 5000;
public noWrapSlides:boolean = false;
public slides:Array<any> = [];

public constructor() {
for (let i = 0; i < 4; i++) {
 this.addSlide();
}
}

public addSlide():void {
let newWidth = 600 + this.slides.length + 1;
this.slides.push({
 image: `//placekitten.com/${newWidth}/300`,
 text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
 ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
});
}

public removeSlide(index:number):void {
this.slides.splice(index, 1);
}
}
