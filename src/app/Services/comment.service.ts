import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public host:String = "http://10.10.223.73:8082/comment"

  constructor(private http:HttpClient) { 
  }

  getComments(post)
  {
    return this.http.get(this.host+"/getComments",post);
  }

  getAllComments()
  {
    return this.http.get(this.host+"/AllComment")
  }

 
}
