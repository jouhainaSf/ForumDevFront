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
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    SignupComponent
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
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
