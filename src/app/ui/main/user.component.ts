import { AuthenticationService } from 'src/services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector:"user-component",
    templateUrl:"user.component.html"
})

export class UserComponent{
    constructor(public authService:AuthenticationService){}
    
}