import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise<boolean>(()=>{
        this.securityService.getAuthenticatedUser().then((res)=>{
          return true;
        }).catch((err)=>{
          this.toastService.show({header:'Message d\'erreur', body:'Veuillez vous authentifier pour accéder à cette page !'});
          return false;
        })
      })
    // return true;
  }
  constructor(private securityService: SecurityService, private toastService: ToastService){}
}
