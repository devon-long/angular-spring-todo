import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  constructor(public hardcodedAuthservice: HardcodedAuthService,
    public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthservice.isUserLoggedIn())
      return true;

      this.router.navigate(['login']);
      return false;
    }

}
