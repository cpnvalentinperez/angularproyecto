import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component'
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component'
import { GuardGuard } from './servicios/guard.guard';

// import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'perfil', component: PerfilComponent, canActivate:[GuardGuard]},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  
      
];
// {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard],},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
