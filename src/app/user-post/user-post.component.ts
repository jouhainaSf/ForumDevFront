import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  isUser:Boolean;
  noPost:Boolean;
  id_u :string;
  userr=new User();

  constructor(
    private userService :UserService,
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
        if(this.userr.id_u==parsedCurrentUser.id_u)
        {
          this.isUser=true
        }else{
          this.isUser=false
        }
        console.log(this.isUser)
        this.postService.findByUser(user).subscribe(
          res=>{
            this.userr.posts=res
            if(res.length==0)
            {
              this.noPost=true;
            }else
            {
              this.noPost=false;
            }
          }
        )
      }
    )
  }

  deletePost(post)
  {
    console.log(post)
    this.postService.deletePost(post).subscribe();
    this.ngOnInit();
  }

}
