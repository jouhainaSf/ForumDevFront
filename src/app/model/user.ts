import { Post } from "./post";
import { Comment } from "./comment";
import { Like } from "./like";
import { Dislike } from "./Dislik";

export class User{

     id_u:string;
     firstName : string;
     lastName:string;
     email: string;
     pwd: string;
     type: string;
     posts :Post[];
     comments : Comment;
     likes :Like[];
     dislikes : Dislike[];
     nbLikes:string;
     nbDislikes:string;
     nbComments : string;
     nbPosts:string

 
}