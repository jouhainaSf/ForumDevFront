import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup ;
  notFound = true;
  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private  router: Router ) {
      this.createForm();
  }

  createForm()
  {
    this.form = this.fb.group({
      email :new FormControl(
        '' , [
          Validators.required ,
          Validators.email
        ]
      ),
      password :new FormControl('' , [
          Validators.required ,
          Validators.max(16) ,
          Validators.min(8) ,
        ]
      )
    }
  ) ;
  }
  get email() {
    return this.form.get('email') ;
  }
  get password() {
    return this.form.get('password') ;
  }
  login() {
   let userService= this.form.value;
   let user= new User();
   user.email=userService.email;
   user.pwd=userService.password;
   this._userService.loginUser(user).subscribe(
     res=>{
       console.log(res);
       if(res==null)
       {
        this.router.navigate(['/']);
        this.notFound=false;
       }else
       {
        this.notFound =true;
        this.router.navigate(['/acceuil']);
       }
       
     },
     err=>{
       this.notFound=false;
       console.log(err);
       this.router.navigate(['/']);
     }
   )
  }
  ngOnInit() {


  }

}
