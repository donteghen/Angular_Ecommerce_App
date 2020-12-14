import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector:"register-component",
    templateUrl:"register.component.html"
})

export class RegisterComponent{

    constructor(){}

    signUp(form: NgForm){
        if(form.valid && form.submitted){
            console.log(JSON.stringify(form.value));
            console.log(form.value.name);
            form.resetForm();
        }
        
    }
  
    GoogleAuth(){

    }
}