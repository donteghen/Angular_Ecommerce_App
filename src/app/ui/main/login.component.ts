import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';
@Component({
    selector:"login-component",
    templateUrl:"login.component.html",
    styles:[".high_light{text-decoration:underline; cursor: pointer}", ".high_light:hover{background-color:#7CE5E5}"]
})

export class LoginComponent{
    
    public message:string;
    form : FormGroup;
    isSubmitted : boolean = false;
    constructor(private fb:FormBuilder, private route:Router, private authService:AuthenticationService) {
      this.form = fb.group({
        email:['', Validators.required],
        password:['', Validators.required]
      });
     }
  
    get email(){
      return this.form.get('name');
    }
  
    get password(){
      return this.form.get('password');
    }
    
    login(){
       this.isSubmitted = true;
       if(this.form.valid){
       this.authService.signIn(this.form.value.email, this.form.value.password)
       }
       else{
           this.message = "Form inputs are invalid!"
       }
    }
    
    GoogleAuth(){
        this.authService.signInWithGoogle();
    }
}