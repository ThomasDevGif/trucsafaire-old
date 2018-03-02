import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  loggedUser: User;
  ingredients: Ingredient[];

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private router: Router,
    private modalService: NgbModal
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

  /**
   * Delete an ingredient by its id
   */
  deleteIngredient(ingredient: Ingredient) {
    let self = this;
    self.loading = true;
    self.restService.deleteIngredient(ingredient)
    .then(function(res) {
      console.log(res);
      return self.refreshIngredients();
    });
  }

  /** Open modal dialog */
  openModal(content, ingredient: Ingredient) {
    let self = this;
    self.modalService.open(content).result.then(function(result) {
      if (result == 'delete') {
        self.deleteIngredient(ingredient);
      }
    }, (reason) => {
      // Do nothing on esc click
    });
  }

}
