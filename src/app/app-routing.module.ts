import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {
    path : 'login' ,
    component : LoginComponent
  },
  {
    path : 'acceuil' ,
    component : AcceuilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
