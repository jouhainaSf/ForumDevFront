import { User } from "./user";
import { Categorie } from "./categorie";
import { Comment } from "./comment";

export class post
{
    id_p:string;
    rate:string
    title:string;
    description:string;
    user:User;
    dateCreation:string;
    categorie:Categorie ;
    comments : Comment  ;
    nbComment:string;
} 