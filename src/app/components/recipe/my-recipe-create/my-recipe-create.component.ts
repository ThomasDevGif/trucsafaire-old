import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { Recipe } from '../../../models/recipe';
import { Ingredient } from '../../../models/ingredient';
import { RestService } from '../../../services/rest.service';
import { AuthentificationService } from '../../../services/authentification.service';

import * as moment from 'moment';

@Component({
  selector: 'app-my-recipe-create',
  templateUrl: './my-recipe-create.component.html',
  styleUrls: ['./my-recipe-create.component.css']
})
export class MyRecipeCreateComponent implements OnInit {

  // Variables
  loggedUser: User;
  loading: boolean = false;
  recipe: Recipe = {
    id: null,
    name: '',
    description: '',
    difficulty: null,
    time: null,
    date: null,
    userId: 1
  };

  // Temp
  selectedIngredientsId;
  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Ingredient 1'
    }, {
      id: 2,
      name: 'Ingredient 2'
    }, {
      id: 3,
      name: 'Ingredient 3'
    }
  ]

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedUser = this.authentificationService.getUser();
    if (undefined == this.loggedUser) {
      this.router.navigate(['/login'])
    }
  }

  /**
   * Check required fields to disable submit button
   * @return {boolean} is form valid
   */
  isInvalidForm() : boolean {
    return this.recipe.name == ''
    || this.recipe.description == ''
    || this.recipe.difficulty == null
    || this.recipe.time == null;
  }

  /**
   * Add recipe to database
   */
  addRecipe() {
    let self = this;
    self.recipe.date = moment().format("DD/MM/YYYY");
    self.recipe.userId = self.loggedUser.id;
    console.log(self.recipe);
    self.loading = true;
    self.restService.createRecipe(self.recipe)
    .then(function() {
      self.loading = false;
      console.log('Created.');
    });
  }

  /**
   * Change url
   * @param {string} link
   */
  goTo(link: string) {
    this.router.navigate([link]);
  }

}
