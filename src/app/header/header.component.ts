import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id_u:string;
  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.id_u=user.id_u;
  }

  logOut()
  {
    this.userService.logout();
    this.router.navigate(['/']);
  }

}
