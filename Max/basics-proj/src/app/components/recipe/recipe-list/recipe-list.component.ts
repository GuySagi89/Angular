import { Component, EventEmitter,Input,Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent  {
  @Input('recipe') currentRecipe!:Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
      name: 'Meatballs',
      description: 'Itsa spicy meatballs!',
      imagePath:
        'https://www.flavcity.com/wp-content/uploads/2018/06/meatballs-tomato-sauce.jpg',
    },
    {
      name: 'Pancakes',
      description: 'Fluffy and delicious!',
      imagePath:
        'https://cafedelites.com/wp-content/uploads/2016/10/PERFECT-Best-Fluffy-Pancakes-IMAGE-450.jpg',
    },
    {
      name: 'Beef Stroganoff',
      description: 'Da, is good.',
      imagePath:
        'https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg?resize=650,910',
    },

  ];

  onRecipePick(recipe:Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
