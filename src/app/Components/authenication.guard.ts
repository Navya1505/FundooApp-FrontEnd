import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServiceService } from '../services/authgurad-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationGuard implements CanActivate {
 constructor( private Authguradservice: AuthguradServiceService, private router: Router) {} 
   canActivate():boolean 
   {
    if (!this.Authguradservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguradservice.gettoken();  
}
  
  
}
