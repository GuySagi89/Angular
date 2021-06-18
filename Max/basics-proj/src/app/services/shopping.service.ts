import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  shoppingList: Ingredient[] = [];
  constructor() {}

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.ingredientsChanged.emit([...this.shoppingList]);
  }

  getShoppingList() {
    return [...this.shoppingList];
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.ingredientsChanged.emit([...this.shoppingList]);
  }

  deleteIngredient(ingredient: Ingredient) {}
}
