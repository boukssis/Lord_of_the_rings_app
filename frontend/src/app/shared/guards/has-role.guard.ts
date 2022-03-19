import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //retrieve user info from localstorage in order to check his roles 
    let user = JSON.parse(String(localStorage.getItem('user')));
  
    if (
      user &&
      route.data &&
      route.data['role'] &&
      route.data['role'].includes(user.roles[0])
    ) {
 
      return true;

    } else {
       return false;
    }
  }
}
