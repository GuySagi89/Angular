import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  currentSelectedRecipe!: Recipe;

  constructor(
    private recipesService: RecipeService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }


}
