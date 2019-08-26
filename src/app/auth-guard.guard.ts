import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router : Router,
              private userService : UserService
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.userService.currentUserValue;
      if (currentUser) {
          // logged in so return true
          return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}
