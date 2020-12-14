import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:"notFound-component",
    templateUrl:"notFound.component.html"
})

export class NotFoundComponent{
    constructor(public router:Router){}

    goHome(){
        this.router.navigateByUrl("/dashboard");
    }

    goToContact(){
        this.router.navigateByUrl("/contact");
    }
}