import { AuthenticationService } from './../../../services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector:"forgotPassword-component",
    templateUrl:"forgotPassword.component.html"
})
export class ForgotPasswordComponent{

    constructor(public authService:AuthenticationService){}
}