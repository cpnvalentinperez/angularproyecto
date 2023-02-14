import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  api = 'https://localhost:3000/api';
  // token; 
  
  constructor(private http: HttpClient,private router: Router) { }
  
  login(email: string, password: string) {
    this.http.post(this.api + '/authenticate', {email: email, password: password})
    .subscribe((resp: any) => {
    //Redireccionamos al ususario a su perfil
        this.router.navigate(['perfil']);
        //Guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      })
    // );
  }

  //Para cerrar sesion eliminamos el token del localStorage
  logout() {
    localStorage.removeItem('token');
  }

  // Un servicio para verificar si existe la sesion
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
  
