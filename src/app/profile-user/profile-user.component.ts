import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { PostService } from '../Services/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  id_u :string;
  userr=new User();
  constructor( private userService :UserService,
               private route : ActivatedRoute,
               private postService :PostService,
                ) { }

  ngOnInit() {
    let currentuser=localStorage.getItem('currentUser');
    let parsedCurrentUser : User = JSON.parse(currentuser)
    console.log(parsedCurrentUser)
    this.id_u=this.route.snapshot.paramMap.get("id_u");
    let user = new User();
    user.id_u=this.id_u;
    this.userService.getUser(user).subscribe(
      res=>
      {
        this.userr=res;
        this.userService.getComments(user).subscribe(
          res=>{
            this.userr.comments=res;
          }
        ),
        this.userService.getNbComments(user).subscribe(
          res=>{
            this.userr.nbComments=res;
          }
        ),
        this.userService.historiqueLikes(user).subscribe(
          res=>{
            this.userr.likes=res;
          }
        ),
        this.userService.historiqueDislikes(user).subscribe(
          res=>{
            this.userr.dislikes=res;
          }
        ),
        this.userService.nbDislikes(user).subscribe(
          res=>
          {
            this.userr.nbDislikes=res;
          }
        ),
        this.userService.nbLikes(user).subscribe(
          res=>{
            this.userr.nbLikes=res;
          }
        )
        
      },
      err=>
      {
        console.log(err)
      }
    );


  }

}
