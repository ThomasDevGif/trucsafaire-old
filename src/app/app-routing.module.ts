import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from  './components/list/list.component';
import { LoginComponent } from  './components/login/login.component';
import { ProfileComponent } from  './components/profile/profile.component';
import { IngredientComponent } from  './components/ingredient/ingredient.component';
import { RecipeComponent } from  './components/recipe/recipe.component';

// Components

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'ingredient',
    component: IngredientComponent
  }, {
    path: 'recipe',
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
