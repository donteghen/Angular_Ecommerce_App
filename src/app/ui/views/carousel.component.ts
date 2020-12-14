import { Component } from '@angular/core';

@Component({
    selector:"carousel-component",
    templateUrl:"carousel.component.html",
    
})

export class CarouselComponent{
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}