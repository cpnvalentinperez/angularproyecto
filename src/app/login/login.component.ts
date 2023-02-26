import { Component, OnInit, VERSION } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

  nombre: string = '';
  clave: string = '';
  // telefono = '';
  // dni = '';

  // cambiaDni(valor:any) {
  //   // Podes consultar el valor por consola
  //   console.log(valor);
  //   this.dni = valor;
  // }

  onClick() {
    alert('Ahora se tu clave!!');
  }

}
//   email = '';
//   password = '';
  
//   constructor(private authService: AuthService) {}
//   Login(){
//     //El servicio authService.login ya direccion en caso de inicio de sesion positivo
//     this.authService.login(this.email, this.password)
//   }
