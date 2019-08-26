import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { PostService } from './Services/post.service';
import { CommentService } from './Services/comment.service';
import { AfficherPostComponent } from './afficher-post/afficher-post.component';
import { HeaderComponent } from './header/header.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { CommentsComponent } from './comments/comments.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AllLikesComponent } from './all-likes/all-likes.component';
import { AllDislikesComponent } from './all-dislikes/all-dislikes.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddPostComponent } from './add-post/add-post.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserPostComponent } from './user-post/user-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    SignupComponent,
    AfficherPostComponent,
    HeaderComponent,
    UpdatepostComponent,
    LikeDislikeComponent,
    CommentsComponent,
    VerticalMenuComponent,
    ProfileUserComponent,
    ProfileHeaderComponent,
    AllCommentsComponent,
    AllLikesComponent,
    AllDislikesComponent,
    AddPostComponent,
    AllCategoriesComponent,
    CategorieComponent,
    AllUsersComponent,
    UserPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  
  ],
  providers: [
    UserService,
    PostService,
    CommentService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
