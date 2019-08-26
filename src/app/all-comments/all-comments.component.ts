import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  noComments:Boolean;
  comments : Comment[];
  id_u:string;
  constructor( private userService : UserService,
               private route : ActivatedRoute

  ) { }

  ngOnInit() {

    this.id_u=this.route.snapshot.paramMap.get("id_u");
    let user = new User();
    user.id_u=this.id_u;
    this.userService.getComments(user).subscribe(
      res=>
      {
        if(res.length==0)
        {
          this.noComments=true;
        }else{
          this.noComments=false;
        }
        this.comments=res;
        return this.comments;
      }
    )
  }

}
