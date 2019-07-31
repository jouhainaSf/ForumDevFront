import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public host:String = "http://10.10.223.73:8082/post"

  constructor(private http:HttpClient) { }

  getNbComment(post)
  {
    return this.http.post<any>(this.host+"/nbComment",post);
  }

  getComments(post)
  {
    return this.http.post<any>(this.host+"/getComments",post);
  }
}
