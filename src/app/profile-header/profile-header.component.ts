import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  id_u:string;
  userr= new User();
  constructor(private userService : UserService,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {

    this.id_u=this.route.snapshot.paramMap.get("id_u");
    let user = new User ();
    user.id_u=this.id_u;
    this.userService.getUser(user).subscribe(
      res=>{
        this.userr=res;
        return this.userr;

      }
    )

  }

}
