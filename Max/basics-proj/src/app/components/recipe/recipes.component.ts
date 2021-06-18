import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  currentSelectedRecipe!: Recipe;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.currentSelectedRecipe = recipe)
    );
  }
}
