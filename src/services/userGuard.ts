import { AuthenticationService } from 'src/services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate{

    constructor(public authService: AuthenticationService, public router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(!this.authService.isLoggedIn){
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }

    
}