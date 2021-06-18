import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input('recipe') currentRecipe!: Recipe;

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipePick(recipe: Recipe) {
    this.recipesService.selectedRecipe.emit(recipe);
  }
}
