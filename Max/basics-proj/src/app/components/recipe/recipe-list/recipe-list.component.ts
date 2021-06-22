import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipeService,
    private route: Router,
    private activeRoute: ActivatedRoute

  ) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipePick(recipe: Recipe) {
  }

  onNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activeRoute });
  }
}
