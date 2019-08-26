import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:User[];
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.allUsers().subscribe(
      res=>{
        this.users=res;
        for(let user of this.users)
        {
          this.userService.getNbComments(user).subscribe(
            res=>{
              user.nbComments=res;
            }
          );
          this.userService.nbLikes(user).subscribe
          (
            res=>{
              user.nbLikes=res;
            }
          );
          this.userService.nbDislikes(user).subscribe(
            res=>{
              user.nbDislikes=res;
            }
          );
          this.userService.nbPost(user).subscribe(
            res=>{
              user.nbPosts=res;
            }
          )
        }
      }
    )
  }

}
