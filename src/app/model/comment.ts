import { post } from "./post";
import { User } from "./user";

export class Comment
{
    id_com:string;
    contenue:string;
    post:post;
    user:User;
    dateCreation:string
}