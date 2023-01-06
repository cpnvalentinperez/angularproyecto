import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component'
import { LoginComponent } from './login/login.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ServiciosComponent } from './servicios/servicios.component'
import { ErrorComponent } from './error404/error.component';

const routes: Routes = [
  {path: 'servicios', component: ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'mi-perfil', component: PerfilComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: '**', component: ErrorComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
