import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  selectedIngredient!: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingService.getShoppingList();

    this.shoppingService.ingredientsChanged.subscribe(
      (ing) => (this.shoppingList = ing)
    );
  }

  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }
}
