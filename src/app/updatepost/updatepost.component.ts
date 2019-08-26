import { Component, OnInit } from '@angular/core';
import { CommentService } from '../Services/comment.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from '../Services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {

  postu =  new Post();
  form:FormGroup
  constructor(private postService:PostService , private route:ActivatedRoute , private router:Router,private fb:FormBuilder){
    this.form=this.fb.group({
      description:new FormControl(),
      image :new FormControl(),
    })
  }

  get description()
  {
    return this.form.get('description')
  }

  get image()
  {
    return this.form.get('image')
  }

  update()
  {
    
    let id=this.route.snapshot.paramMap.get('id_p');
    let post =new Post()
    post.id_p=id;
    this.postService.getPost(post).subscribe(
      res=>
      {
        this.postu=res;
      }
    )

    let postDetail=this.form.value
    this.postu.description=postDetail.description
    this.postu.images=postDetail.image;
    this.postService.updatePost(this.postu).subscribe(
      res=>{
        this.postu=res;
        this.router.navigate(['/Post/'+id])

      }
    )
  }

  cancel()
  {
    let id=this.route.snapshot.paramMap.get('id_p');
    this.router.navigate(['/Post/'+id])
  }

  ngOnInit() {

    let id=this.route.snapshot.paramMap.get('id_p');
    let post =new Post()
    post.id_p=id;
    this.postService.getPost(post).subscribe(
      res=>
      {
        this.postu=res;
        console.log(this.postu)
        return this.postu;
      }
    )
    
  }

}
