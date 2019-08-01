import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public host:String = "http://10.10.223.73:8082/user"
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
  SignUp(user)
  {
    return this.http.post<any>(this.host+ "/SignUp",user);
  }

  Commenter(comment)
  {
    return this.http.post<any>(this.host+"/comment",comment)
  }
}
