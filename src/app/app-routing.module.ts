import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';
import { AfficherPostComponent } from './afficher-post/afficher-post.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'acceuil',
    component:AcceuilComponent
  },
  {
    path:'SignUp',
    component:SignupComponent
  },
  {
    path:'Post/:id_p',
    component:AfficherPostComponent
  },
  {
    path:'UpdatePost',
    component:UpdatepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
