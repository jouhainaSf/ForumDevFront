import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  public host:String = "http://localhost:8082/user"
  constructor(private http: HttpClient) { 
    
  }
  loginUser(user)
  {
    return this.http.post<any>(this.host+ "/SignIn",user);
  }
  allUsers()
  {
    return this.http.get(this.host+"/users")
  }
}
