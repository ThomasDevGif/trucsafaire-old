import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';
import { Ingredient } from '../../models/ingredient';
import { User } from '../../models/user';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  // Variables
  loading: boolean = false;
  ingredients: Ingredient[];
  loggedUser: User;

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  // If no logged user in local storage, redirect to login page
  ngOnInit() {
    this.loggedUser = this.authentificationService.getUser();
    if (undefined == this.loggedUser) {
      this.router.navigate(['/login'])
    } else {
      this.refreshIngredients();
    }
  }

  /**
   * Get all ingredients order by name
   */
  refreshIngredients() {
    let self = this;
    self.loading = true;
    self.restService.getIngredients()
    .then(function(resIngredients) {
      self.ingredients = resIngredients;
      self.loading = false;
    });
  }

}
