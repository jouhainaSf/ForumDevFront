import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { User } from '../model/user';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  id:string;
  id_u:string;
  post= new Post();

  constructor(private postService:PostService , private route:ActivatedRoute)
   { 
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.id_u=user.id_u;

   }

  liker()
  {
    
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        post1=res;
        console.log(post1)
      })      
      this.postService.Liker(post1,this.id_u).subscribe(
      res=>{
        this.post=res;
        return this.post
      }
    )
  }

  disliker()
  {
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        post1=res;
        console.log(post1)
      })      
      this.postService.disLiker(post1,this.id_u).subscribe(
      res=>{
        this.post=res;
      }
    )
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id_p")
    let post1= new Post();
    post1.id_p=this.id;
    this.postService.getPost(post1).subscribe(
      res=>{
        this.post=res
        return this.post;
      }
    )
  
  }

}
