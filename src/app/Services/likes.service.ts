import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private host = "http://localhost:8082/post";
  constructor(private http:HttpClient) { }

  
}
