import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PostService } from '../Services/post.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie';
import { CategorieService } from '../Services/categorie.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { Image } from '../model/image';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  categories:Categorie[];
  form:FormGroup;
  constructor(private fb:FormBuilder,
              private postService:PostService,
              private router:Router,
              private categorieService:CategorieService) 
  {
    this.form = fb.group(
      {
        title : new FormControl('',[
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]
        ),
        description : new FormControl('',[
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]
        ),
        categorie : new FormControl('',[
          Validators.required
        ]),
        image : new FormControl(),
      }

    )
   }
   get title()
   {
     return  this.form.get('title');
   }

   get description()
   {
     return this.form.get('description');
   }

   get categorie()
   {
     return this.form.get('categorie');
   }

   get image()
   {
     return this.form.get('image');
   }
  ngOnInit() {
    this.categorieService.getCategories().subscribe(
      res=>{
        this.categories=res;

      }
    )

  }
  addPost()
  {
    let postDetails=this.form.value;
    let post=new Post();
    post.categorie=postDetails.categorie;
    post.title=postDetails.title;
    post.description=postDetails.description;
    post.rate="0";
    // image uploading
    let img =new Image();
    img.name=postDetails.image;
    img.path=postDetails.image;
    let imageStringfied=JSON.stringify(postDetails.image)
    console.log(imageStringfied)
    let slicedImage= imageStringfied.substring(15,imageStringfied.length-1);
    console.log ("slicedImage :"+slicedImage)
    img.path=slicedImage;
    let stringimg=JSON.stringify(img);
    let slidedImg=stringimg.slice(0,stringimg.length)
    let parsedImage=JSON.parse(slidedImg);
    console.log(parsedImage)
    post.images.push(parsedImage);
    //end of uploading
    let user : User = JSON.parse (localStorage.getItem('currentUser'))
    post.user=user;
    console.log(post)
      this.postService.addPost(post).subscribe(
        res=>{
          post=res;
         console.log(post)
         this.router.navigate(['/Post/'+post.id_p]);
       } , err=>{
         console.log(err)

        }
      )
 }

}
