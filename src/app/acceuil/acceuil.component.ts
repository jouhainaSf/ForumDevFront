import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.allUsers().subscribe(
      res=>{
        this.users=res;
        return this.users;
      }

    )
  }

}
