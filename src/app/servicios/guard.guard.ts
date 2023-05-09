import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private AuthService:AuthService, private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currenteUser=this.AuthService.UsuarioAutenticado;
      if ( currenteUser && currenteUser.accessToken)
      {
        return true;
      }
      else
      {
        this.rutas.navigate(['/iniciar-sesion']);
        return false;
      }
  }
}
