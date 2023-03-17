import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      clave:['',[Validators.required, Validators.minLength(8)]],
      correo:['',[Validators.required, Validators.email]],
    })
  }
 
  ngOnInit() { }

  get Password(){
    return this.form.get("clave");
  }
 
  get Mail(){
   return this.form.get("correo");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
  

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

}
  // nombre: string = '';
  // clave: string = '';
  // // telefono = '';
  // // dni = '';

  // // cambiaDni(valor:any) {
  // //   // Podes consultar el valor por consola
  // //   console.log(valor);
  // //   this.dni = valor;
  // // }

  // onClick() {
  //   alert('Ahora se tu clave!!');
  // }


  // email = '';
  //  password = '';
  
  //  constructor(private authService: AuthService) {}
  //  login(){
  //   //El servicio authService.login ya direccion en caso de inicio de sesion positivo
  //    this.authService.login(this.email, this.password)
  //  }
