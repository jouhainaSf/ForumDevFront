import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public host:String = "http://10.10.223.73:8082/post"

  constructor(private http : HttpClient) { }

  getAllPosts()
  {
    return this.http.get(this.host+"/posts");
  }
}
