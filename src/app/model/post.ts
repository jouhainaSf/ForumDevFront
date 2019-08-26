import { User } from "./user";
import { Categorie } from "./categorie";
import { Comment } from "./comment";
import { Image } from "./image";

export class Post
{
    id_p:string;
    rate:string
    title:string;
    description:string;
    user=new User();
    dateCreation:string;
    categorie:Categorie ;
    nbComment:string;
    images = new Array(Image);
} 