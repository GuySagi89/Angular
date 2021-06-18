import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  onAdd(name: string, amount: string) {
    if (name && amount) {
      this.shoppingService.addIngredient({
        name: name,
        amount: Number(amount),
      });
    }
  }

  onDelete() {}
  onClear() {}
}
