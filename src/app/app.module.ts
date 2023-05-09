import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InterceptorService } from './servicios/interceptor.service';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, IniciarSesionComponent, PerfilComponent,AcercaComponent],

  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],

  providers: [ServiciosComponent,
      {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
