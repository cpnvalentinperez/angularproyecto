import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){
      this.form=this.formBuilder.group(
        {
          email:['',[Validators.required,Validators.email]],
          password:['',[Validators.required,Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
              deviceId: ["17867868768"],
              deviceType: ["DEVICE_TYPE_ANDROID"],
              notificationToken:["67657575eececc34"]
          })
        }
      )
  } 

  onSubmit() {
    if (this.form.invalid) {
      alert("Por favor ingrese los campos requeridos.");
      return;
    }
    // Si los campos están completos, realiza la acción necesaria aquí
  }
  
  ngOnInit():void { }

  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }

}
