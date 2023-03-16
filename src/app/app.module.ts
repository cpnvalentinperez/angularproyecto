import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
