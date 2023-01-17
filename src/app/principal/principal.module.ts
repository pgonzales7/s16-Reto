import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    NavComponent
    
  ]
})
export class PrincipalModule { }
