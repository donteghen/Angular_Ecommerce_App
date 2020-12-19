import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
    selector:"emailConfirm-component",
    templateUrl:"emailConfirm.component.html"
})
export class EmailConfirmComponent{

    constructor(public authService:AuthenticationService){}
}