import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component'
import { LoginComponent } from './login/login.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ServiciosComponent } from './servicios/servicios.component'
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component'
import { ErrorComponent } from './error404/error.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard],},
  {path: 'acerca', component: AcercaComponent},
  {path: 'iniciar', component: IniciarSesionComponent},
  {path: '**', component: ErrorComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
