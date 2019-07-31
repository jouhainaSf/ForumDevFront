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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    SignupComponent,
    AfficherPostComponent,
    HeaderComponent
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
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
