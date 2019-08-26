import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  public host:String = "http://localhost:8082/user"
  constructor(private http: HttpClient) { 

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  loginUser(user)
  {
    return this.http.post<any>(this.host+ "/SignIn",user).pipe(map (res => {
      // login successful if there's a jwt token in the response
      if (res) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.currentUserSubject.next(user);
      }

      return res;
      }));
  }
  logout() 
  {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  allUsers()
  {
    return this.http.get<any>(this.host+"/users")
  }
  SignUp(user)
  {
    return this.http.post<any>(this.host+ "/SignUp",user);
  }

  Commenter(comment)
  {
    return this.http.post<any>(this.host+"/comment",comment)
  }
  getUser(user)
  {
    return this.http.post<any>(this.host+"/getUser",user)
  }
  getComments(user)
  {
    return this.http.post<any>(this.host+"/historiqueComment",user);
  }

  getNbComments(user)
  {
    return this.http.post<any>(this.host+"/nbComments",user);
  }

  historiqueLikes(user)
  {
    return this.http.post<any>(this.host+"/historiqueLikes",user);
  }

  historiqueDislikes(user)
  {
    return this.http.post<any>(this.host+"/historiqueDislikes",user);
  }

  nbLikes(user)
  {
    return this.http.post<any>(this.host+"/nbLikes",user);
  }

  nbDislikes(user)
  {
    return this.http.post<any>(this.host+"/nbDislikes",user);
  }

  nbPost(user)
  {
    return this.http.post<any>(this.host+'/nbPosts',user);
  }

}
