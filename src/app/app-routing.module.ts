import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
