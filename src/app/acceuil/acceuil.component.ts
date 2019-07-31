import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { PostService } from '../Services/post.service';
import { CommentService } from '../Services/comment.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  users;
  posts;
  constructor(private userService: UserService , private postService : PostService , private commentService : CommentService) { }

  ngOnInit() {
    this.userService.allUsers().subscribe(
      res=>{
        this.users=res;
        return this.users;
      }
)
this.postService.getAllPosts().subscribe(
  res=>{
    this.posts=res;
    for(let post of this.posts)
    {
      this.commentService.getNbComment(post).subscribe(
        res=>{
          post.nbComment=res;
        }
      )
    }
    return this.posts;
  }
)
    
  }

}
