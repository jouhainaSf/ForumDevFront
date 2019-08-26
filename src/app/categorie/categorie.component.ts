import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  noPost:Boolean;
  categorie=new Categorie();
  posts:Post[];
  id_cat:string;
  constructor(private postService:PostService,
              private categorieService:CategorieService,
              private activedRouter : ActivatedRoute) { }

  ngOnInit() {
    this.id_cat=this.activedRouter.snapshot.paramMap.get('id_cat');
    console.log(this.id_cat)
    let cat= new Categorie();
    cat.id_cat=this.id_cat;
    this.categorieService.getCategorie(cat).subscribe(
      res=>{
        this.categorie=res;
        this.postService.getPostByCategorie(this.categorie).subscribe(
          res=>{
            if(res.length==0)
            {
              this.noPost=true;
            }else{
              this.noPost=false;
            }
            this.posts=res;
            for(let post of this.posts)
            this.postService.getNbComment(post).subscribe(
              res=>{
                post.nbComment=res;
              }
            )
          }
        )
      
      }
    );
    

  }

}
