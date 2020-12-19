import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/auth.service';
import { User } from 'src/models/user.model';

@Component({
    selector:"register-component",
    templateUrl:"register.component.html"
})

export class RegisterComponent{
    form:FormGroup;
    isSubmitted : boolean = false;
    errorMEssage : string;  
    constructor(public authService:AuthenticationService, public fb:FormBuilder){
        this.form = fb.group({
            email:['', Validators.required],
            password:['', Validators.required]
          });
        }
        get email(): any {
          return this.form.get('email');
        }
        get password(): any {
          return this.form.get('password');
        }
    
        signUp(){

            this.isSubmitted = true;
            if(this.form.valid){
              return this.authService.signUp(this.form.value.email, this.form.value.password);
            }
            else{
              this.errorMEssage = "Invalid inputs submitted! Please check each field carefully"
            }
        
        }
    
    GoogleAuth(){
        this.authService.signInWithGoogle();
    }
}