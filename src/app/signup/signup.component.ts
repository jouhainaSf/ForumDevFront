import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupf:FormGroup;
  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private  router: Router ) {
      this.createForm();
  }

  createForm()
  {
    this.signupf = this.fb.group({
      email :new FormControl(
        '' , [
          Validators.required ,
          Validators.email
        ]
      ),
      password :new FormControl('' , [
          Validators.required ,
          Validators.maxLength(16) ,
          Validators.minLength(8) ,
        ]
      ),
      firstname:new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ]
      ),
      lastname:new FormControl('',[
        Validators.required,
        Validators.min(1),
        Validators.max(10),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ]
      ),
      confirmpassword: new FormControl('', [
        Validators.required,
        this.MatchPassword
      ]),
    },
  ) ;
  }
  
  get firstname()
  {
    return this.signupf.get('firstname')
  }
  get lastname()
  {
    return this.signupf.get('lastname')
  }
  get email()
  {
    return this.signupf.get('email')
  }
  get password()
  {
    return this.signupf.get('password')
  }
  get confirmpassword()
  {
    return this.signupf.get('confirmpassword')
  }
  SignUp()
  {
    let userService=this.signupf.value
    let user=new User()
    user.email=userService.email
    user.firstName=userService.firstname
    user.lastName=userService.lastname
    user.pwd=userService.password
   
    this._userService.SignUp(user).subscribe(
      res=>{
        console.log(res)
        if(res!=null)
        {
          this.router.navigate(['/'])

        }else
        {
          this.router.navigate(['/SingnUp'])

        }
      },
      err=>
      {
        console.log(err)
      }
    )
  }
  ngOnInit() {
  }
   MatchPassword(control: AbstractControl) {
    let parent = control.parent
    if (parent) {
      let password = parent.get('password').value;
      let confirmPassword = control.value;
  
      if (password == confirmPassword) {
        return { ConfirmPassword: true };
      } else {
        return null
      }
    } else {
      return null;
    }
  }
}
