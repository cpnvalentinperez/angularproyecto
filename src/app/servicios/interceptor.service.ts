import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private AuthService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currenteUser=this.AuthService.UsuarioAutenticado;
    if(currenteUser && currenteUser.accessToken)
    {
      req=req.clone({
        setHeaders: {
          Authorization: `Bearer ${currenteUser.accessToken}`
      }
    })
  }
    console.log("Interceptor esta andando " + JSON.stringify(currenteUser));
    return next.handle(req);
  }
}
