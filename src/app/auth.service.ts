import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url='http://npinti.ddns.net:9008/api/auth/login';
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient){
    console.log("El servicio esta corriendo normalmente");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currenteUser')|| '{}'))
  }

  IniciarSesion(credenciales:any):Observable<any> 
  {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
    }))
  }

  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }
}






// //parte vieja
// // export class AuthService {
  
// //   api = 'https://localhost:3000/api';
// //   token; 
  
// //   constructor(private http: HttpClient,private router: Router) {
// //     this.token = localStorage.getItem('auth_token');
// //    }
  
  
// //   login(email: string, password: string) {
// //     this.http.post(this.api + '/authenticate', {email: email, password: password}).subscribe((resp: any) => {
// //     //Redireccionamos al ususario a su perfil
// //         this.router.navigate(['perfil']);
// //         //Guardamos el token en localStorage
// //         localStorage.setItem('auth_token', resp.token);
// //       })
// //     ;
// //   }

// //   //Para cerrar sesion eliminamos el token del localStorage
// //   logout() {
// //     localStorage.removeItem('auth_token');
// //   }

// //   // Un servicio para verificar si existe la sesion
// //   public get logIn(): boolean {
// //     return (localStorage.getItem('auth_token') !== null);
// //   }
// // }
  
