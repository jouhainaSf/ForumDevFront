import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../model/post';
import { PostService } from '../Services/post.service';
import { CommentService } from '../Services/comment.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../model/image';

@Component({
  selector: 'app-afficher-post',
  templateUrl: './afficher-post.component.html',
  styleUrls: ['./afficher-post.component.css']
})
export class AfficherPostComponent implements OnInit {

  
  id:string;
  post;
  comments;
  form:FormGroup
  constructor(private fb :FormBuilder 
    , private route:ActivatedRoute 
    , private postService:PostService 
    , private commentService:CommentService 
    , private _userService : UserService
    ,private sanitizer :DomSanitizer
  )
   { 
    this.form= this.fb.group({
      contenue : new FormControl('',[
        Validators.required
      ]
      )
    }

    )
    this.AfficherPost();
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
    let post1= new post();
    post1.id_p=this.id;
    comment.post=post1;
    let user=new User();
    user.id_u="264";
    comment.user=user;
    this._userService.Commenter(comment).subscribe(
      res=>{
        console.log(res)
      }
    )
    window.location.reload();
  }

  AfficherPost()
  {

    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        post1=res;
        this.postService.getNbComment(post1).subscribe(
          res=>{
            post1.nbComment=res;
          }
        )
        console.log(res)
        this.post=post1;
        return this.post;
      }
    )
  }

  transform(image:Image)
  { 
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+image.description)
  }

  ngOnInit() {
  }
}
