import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  index!: number;

  constructor(
    private recipeS: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = +this.activatedRoute.snapshot.params['id'];
    this.recipe = this.recipeS.getRecipe(this.index);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.recipe = this.recipeS.getRecipe(this.index);
    });
  }

  moveToShoppingList() {
    this.recipeS.addIngredientsToShoppingList([...this.recipe.ingredients]);
  }

  moveToEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
