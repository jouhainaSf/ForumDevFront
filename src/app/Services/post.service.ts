import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public host:String = "http://localhost:8082/post"

  constructor(private http : HttpClient) {

   }

  getAllPosts()
  {
    return this.http.get<any>(this.host+"/posts");
  }
  getPost(post)
  {
    return this.http.post<any>(this.host+"/afficherPost",post);
  }
  getNbComment(post)
  {
    return this.http.post<any>(this.host+"/nbComment",post);
  }

  Liker(post , id_u)
  {
    return this.http.post<any>(this.host+"/liker/"+id_u,post)
  }

  disLiker(post , id_u)
  {
    return this.http.post<any>(this.host+"/disliker/"+id_u,post)
  }

  updatePost(post)
  {
    return this.http.post<any>(this.host+"/modifyPost",post)
  }
  findByUser(user)
  {
    return this.http.post<any>(this.host+"/findByUser",user);
  }

  addPost(post)
  {
    return this.http.post<any>(this.host+'/Poster',post);
  }

  getPostByCategorie(categorie)
  {
    return this.http.post<any>(this.host+"/PostByCategorie",categorie)
  }
  deletePost(post)
  {
    return this.http.post<any>(this.host+"/DeletePost",post)
  }
}
