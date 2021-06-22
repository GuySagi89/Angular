import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  shoppingList: Ingredient[] = [];
  constructor() {}

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.push(...ingredients);
    this.ingredientsChanged.next([...this.shoppingList]);
  }

  getShoppingList() {
    return [...this.shoppingList];
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.ingredientsChanged.next([...this.shoppingList]);
  }

  deleteIngredient(ingredient: Ingredient) {}
}
