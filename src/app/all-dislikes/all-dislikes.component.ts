import { Component, OnInit } from '@angular/core';
import { Dislike } from '../model/Dislik';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-all-dislikes',
  templateUrl: './all-dislikes.component.html',
  styleUrls: ['./all-dislikes.component.css']
})
export class AllDislikesComponent implements OnInit {

  id_u:string;
  dislikes=new Array(Dislike);
  isNull :Boolean
  isNotNull: Boolean
  constructor( private userService:UserService,
               private route : ActivatedRoute

  ) { }

  ngOnInit() {

    this.isNotNull=false;
    this.isNull=false;
    this.id_u=this.route.snapshot.paramMap.get("id_u");
    let user = new User();
    this.userService.historiqueDislikes(user).subscribe(
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
        this.dislikes=res;
      }
    )
  }

}
