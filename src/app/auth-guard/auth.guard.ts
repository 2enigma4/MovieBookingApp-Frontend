import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private route: Router, private userService: UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.authService.getToken()!==null){
      const role = route.data["roles"] as Array<string>;
    
      if(role){
        const match = this.userService.roleMatch(role);
        if(match){
          return true;
        }
        else{
          this.route.navigate(['/forbidden']);
          return false;
        }
      }

    }
    
    this.route.navigate(['/login-signup']);
    return false;
      
  }
  
}
