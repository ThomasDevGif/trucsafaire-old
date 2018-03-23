import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { Recipe } from '../../../models/recipe';
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

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.loggedUser = this.authentificationService.getUser();
    // if (undefined == this.loggedUser) {
    //   this.router.navigate(['/login'])
    // } else {
    //   // init ...
    // }
  }

  /**
   * Add recipe to database
   */
  addRecipe() {
    // TODO : add ingredients
    this.recipe.date = moment().format("DD/MM/YYYY");
    // this.recipe.userId = this.loggedUser.id;
    console.log(this.recipe);
  }

}
