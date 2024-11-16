import { Component, inject, OnInit } from '@angular/core';
import RecipeService from '../recetasLLamada/recipe.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { Receta } from '../../model/Receta.interface';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderMacizoComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export default class RecipeListComponent implements OnInit {
  recetaInicial: any[] = [];
  ruper!: Receta;

  private recipeService = inject(RecipeService);

  ngOnInit(): void {
    // Llama al servicio para obtener recetas
    this.recipeService.getRecipes().subscribe((data:any) => {
      //this.recipes = data.recipes;
      this.recetaInicial = data.recipes;
    });
  }

 /* GuardarPrimeraR() {
    const recetaa: Receta = {
      idReceta: this.recetaInicial[0].idReceta,
      nombre: this.recetaInicial[1].nombre,
      instrucciones: this.recetaInicial[2].instrucciones,
      calorias: this.recetaInicial[3].calorias,
      ingredientes: this.recetaInicial[4].ingredientes,
      imagenUrl: this.recetaInicial[5].imagenUrl,
    };
    this.recipeService.guardarReceta(recetaa);
  }*/
}
