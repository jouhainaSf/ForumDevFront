import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
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
  post=new Post();
  comments= new Array(Comment);
  form:FormGroup
  constructor(private fb :FormBuilder 
    , private route:ActivatedRoute 
    , private postService:PostService 
    , private commentService:CommentService 
    , private _userService : UserService
    ,private sanitizer :DomSanitizer
  )
   { 
    
   
   }
  transform(image)
  { 
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,'+image.description)
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        this.post=res;
        console.log(this.post);
        this.postService.getNbComment(post1).subscribe(
          res=>{
            this.post.nbComment=res;
          }
        )
        console.log(res)
        
      }
    )
  }
}
