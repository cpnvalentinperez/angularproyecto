import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  authService: AuthService;
  title = 'angularproyecto';

  constructor(authService: AuthService) {
    this.authService = authService;
  }
}
