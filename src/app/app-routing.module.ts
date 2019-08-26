import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';
import { AfficherPostComponent } from './afficher-post/afficher-post.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { componentFactoryName } from '@angular/compiler';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AllLikesComponent } from './all-likes/all-likes.component';
import { AllDislikesComponent } from './all-dislikes/all-dislikes.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'acceuil',
    component:AcceuilComponent,
    canActivate:[AuthGuardGuard]

   },
  {
    path:'SignUp',
    component:SignupComponent
  },
  {
    path:'Post/:id_p',
    component:AfficherPostComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'UpdatePost/:id_p',
    component:UpdatepostComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'profile/:id_u',
    component:ProfileUserComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'comments/:id_u',
    component:AllCommentsComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'likes/:id_u',
    component:AllLikesComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'dislikes/:id_u',
    component:AllDislikesComponent,
    canActivate:[AuthGuardGuard]

    
  },
  {
    path:'addPost',
    component:AddPostComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'allCategories',
    component:AllCategoriesComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'categorie/:id_cat',
    component:CategorieComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:'users',
    component:AllUsersComponent,
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
