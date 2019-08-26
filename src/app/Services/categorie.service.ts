import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService { 
   public host:String = "http://localhost:8082/categorie"


  constructor(private htpp : HttpClient) { }

  getCategories()
  {
    return this.htpp.get<any>(this.host+'/categories');
  }

  getCategorie(categorie)
  {
    return this.htpp.post<any>(this.host+'/getCategorie',categorie)
  }
}
