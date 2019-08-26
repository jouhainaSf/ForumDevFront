import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../Services/post.service';
import { User } from '../model/user';
import { Comment } from '../model/comment';
import { CommentService } from '../Services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id:string;
  comments:Comment[];
  form:FormGroup
  constructor(private fb:FormBuilder
     , private userService:UserService
     ,private route:ActivatedRoute 
     , private postService:PostService
     ,private commentService:CommentService) { 
    this.form= this.fb.group({
      contenue : new FormControl('',[
        Validators.required
      ]
      )
    }

    )
  }
  get contenue()
   {
     return this.form.get('contenue')
   }

  Commenter()
  {
    let commentValue = this.form.value;
    let comment = new Comment();
    comment.contenue=commentValue.contenue;
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        comment.post=res;
      }
    )
    comment.post=post1;
    let user=new User();
    user.id_u="264";
    comment.user=user;
    this.userService.Commenter(comment).subscribe(
      res=>{
        console.log(res)
      }
    )
    this.ngOnInit();
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        console.log(res)
        this.commentService.getComments(res).subscribe(
          res=>{
              this.comments=res;

          }
        )
      }
    )
    

  }

}
