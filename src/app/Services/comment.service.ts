import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public host:String = "http://localhost:8082/comment"

  constructor(private http:HttpClient) { 
  }

  getComments(post)
  {
    return this.http.post<any>(this.host+"/getComments",post);
  }

  getAllComments()
  {
    return this.http.get(this.host+"/AllComment")
  }

 
}
