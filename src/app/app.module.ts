import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, IniciarSesionComponent],

  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
