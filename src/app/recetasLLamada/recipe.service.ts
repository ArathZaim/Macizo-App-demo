import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../../model/Receta.interface';

@Injectable({
  providedIn: 'root',
})
export default class RecipeService {
  private http = inject(HttpClient);

  getRecipes(): Observable<any> {
    return this.http.get('http://localhost:8080/macizoapp/recipes');
  }
    /*getRecipes() {
      return this.http.get<any>('http://localhost:8080/macizoapp/recipes');
    }*/
    guardarReceta(receta:Receta){
      return this.http.post<Receta>('http://localhost:8080/macizoapp/recipes',receta);

    }
}
