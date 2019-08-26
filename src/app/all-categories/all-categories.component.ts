import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../Services/categorie.service';
import { Categorie } from '../model/categorie';
import { PostService } from '../Services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  noPost:Boolean;
  
  categories:Categorie[];
  constructor(private categorieService : CategorieService , 
              private postService : PostService) { }

  ngOnInit() {

    let posts : Post[];
    this.categorieService.getCategories().subscribe(
      res=>{
        this.categories=res;
        for(let categorie of this.categories)
        {
          this.postService.getPostByCategorie(categorie).subscribe(
            res=>
            {
              if(res.length==0)
              {
                this.noPost=true;
              }
              else{
                this.noPost=false;
              }
              posts=res;
              for(let post of posts)
              {
                this.postService.getNbComment(post).subscribe(
                  res=>{
                    post.nbComment=res;
                  }
                )
                
              }
              categorie.posts=posts;
            }
          )
        }
        console.log(this.categories)
      }
    )

  }

}
