import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../model/post';
import { PostService } from '../Services/post.service';
import { CommentService } from '../Services/comment.service';

@Component({
  selector: 'app-afficher-post',
  templateUrl: './afficher-post.component.html',
  styleUrls: ['./afficher-post.component.css']
})
export class AfficherPostComponent implements OnInit {

  id:string;
  post;
  comments;
  constructor(private route:ActivatedRoute , private postService:PostService , private commentService:CommentService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        this.post=res;
        return this.post;
      }
    )
    this.postService.getPost(post1).subscribe(
      res=>{
        this.post=res;
        this.commentService.getComments(post).subscribe(
          res=>{
            this.comments=res;
            return this.comments;
          }
        )
        
      }
    )


  }

}
