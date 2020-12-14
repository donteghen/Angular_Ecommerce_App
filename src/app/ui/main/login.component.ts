import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector:"login-component",
    templateUrl:"login.component.html",
    styles:[".high_light{text-decoration:underline; cursor: pointer}", ".high_light:hover{background-color:#7CE5E5}"]
})

export class LoginComponent{
    /*public email : string;
    public password: string;*/
    public message:string;
    constructor(public router:Router){}

    onSubmit(form:NgForm){
        if(form.valid && form.submitted){
            
            console.log(JSON.stringify(form.value));
            form.resetForm();
        }
        else{
            this.message = "Please enter your email and password correctly!"
        }
    }
    GoogleAuth(){

    }
}