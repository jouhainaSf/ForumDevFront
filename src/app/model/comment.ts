import { Post } from "./post";
import { User } from "./user";

export class Comment
{
    id_com:string;
    contenue:string;
    post :Post;
    user :User;
    dateCreation:string
}