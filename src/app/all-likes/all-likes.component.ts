import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { Like } from '../model/like';

@Component({
  selector: 'app-all-likes',
  templateUrl: './all-likes.component.html',
  styleUrls: ['./all-likes.component.css']
})
export class AllLikesComponent implements OnInit {

  isNull: Boolean;
  isNotNull:Boolean;
  likes=new Array(Like);
  id_u:string;
  constructor( private userService : UserService ,
               private route : ActivatedRoute
  ) {

   }

  ngOnInit() {
 
    this.id_u=this.route.snapshot.paramMap.get("id_u");
    let user = new User();
    user.id_u=this.id_u;
    this.userService.historiqueLikes(user).subscribe(
      res=>{
        if(res.length==0)
        {
          this.isNull=true;
          this.isNotNull=false;
        }else
        {
          this.isNotNull=true;
          this.isNull=false;
        }
        this.likes=res;
        
      }
    );
  }

}
