import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RecipeDetailComponent } from '../components/recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../components/recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../components/recipe/recipe-start/recipe-start.component';
import { RecipesComponent } from '../components/recipe/recipes.component';
import { ShoppingListComponent } from '../components/shopping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
