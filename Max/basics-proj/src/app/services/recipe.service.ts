import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private shopService: ShoppingService) {}

  selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'Meatballs',
      description: 'Itsa spicy meatballs!',
      imagePath:
        'https://www.flavcity.com/wp-content/uploads/2018/06/meatballs-tomato-sauce.jpg',
      ingredients: [
        { name: 'eggs', amount: 2 },
        { name: 'meat', amount: 1 },
      ],
    },
    {
      name: 'Pancakes',
      description: 'Fluffy and delicious!',
      imagePath:
        'https://cafedelites.com/wp-content/uploads/2016/10/PERFECT-Best-Fluffy-Pancakes-IMAGE-450.jpg',
      ingredients: [
        { name: 'eggs', amount: 2 },
        { name: 'flour', amount: 1 },
        { name: 'sugar', amount: 3 },
      ],
    },
    {
      name: 'Beef Stroganoff',
      description: 'Da, is good.',
      imagePath:
        'https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg?resize=650,910',
      ingredients: [
        { name: 'mushrooms', amount: 3 },
        { name: 'beef', amount: 1 },
      ],
    },
  ];

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopService.addToShoppingList(ingredients);
  }
}
