import { stringify } from "@angular/compiler/src/util";
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import  firebase from "firebase/app";

import { filter } from "rxjs/operators";
import { User } from "src/models/user.model";


@Injectable()
export class AuthenticationService{
    previousUrl: string;
    userData : any;
    sessionIsOpen:boolean;
    constructor(public fireAuth:AngularFireAuth, public zone:NgZone, public router:Router, public firestore: AngularFirestore){
            router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
              console.log('prev:', event.url);
              this.previousUrl = event.url;
            });

            this.fireAuth.authState.subscribe(user =>{
                if(user){
                    this.userData = user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user'));
                }
                else{
                    localStorage.setItem('user', null);
                    JSON.parse(localStorage.getItem('user'));
                }
            })
        }

    signIn(email:string, password:string){
        this.fireAuth.signInWithEmailAndPassword(email, password)
        .then((results) => {
            this.zone.run(() => this.router.navigateByUrl('/store'));
            this.sessionIsOpen = true;
            this.setUserData(results.user);
        }).catch((error) => {
            window.alert(error.message)
        });

    }

    signUp(email:string, password:string){
        this.fireAuth.createUserWithEmailAndPassword(email,password)
        .then((results) =>{
            this.sendVerificationEmail();
            this.sessionIsOpen = true;
            this.setUserData(results.user)
        })
    }
    goToSignIn(){
       return this.router.navigateByUrl('/login');
    }

    signOut(){
        this.fireAuth.signOut()
        .then(() => {
            localStorage.removeItem('user')
            this.sessionIsOpen = false;
            this.router.navigateByUrl('/dashboard')
        });
    }

    signInWithGoogle(){
        this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((results) =>{
            this.zone.run(() => this.router.navigateByUrl('/store'));
            this.setUserData(results.user)
            this.sessionIsOpen = true;
        }).catch((error) => {
            window.alert(error.message)
        });
        
    }

    async sendVerificationEmail(){
        return (await this.fireAuth.currentUser).sendEmailVerification()
        .then(() => this.router.navigateByUrl('/emailVerify'));
    }

    // Reset Forggot password
ForgotPassword(passwordResetEmail) {
    return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
}

    // Returns true when user is looged in and email is verified
get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

     /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      id: user.id,
      name: user.name,
      surName:user.surName,
      email: user.email,
      password:user.password,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }
}