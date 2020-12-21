import { CartComponent } from './../app/ui/main/cart.component';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutGuard implements CanActivate{
    cartVisited: boolean = true;

    constructor(public router:Router){}
    canActivate(route:ActivatedRouteSnapshot, next:RouterStateSnapshot):boolean{
        if(this.cartVisited){
            this.cartVisited =false;
            if(route.component != CartComponent){
                this.router.navigateByUrl('/store');
                return false;
            }
        } 
        return true;
    }

}