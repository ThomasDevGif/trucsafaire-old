import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Recipe } from '../../models/recipe';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  // Variables
  loggedUser: User;
  loading: boolean = false;

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Recipe',
      description: 'description ...',
      difficulty: 2,
      date: '01/01/01',
      userId: 1
    }, {
      id: 2,
      name: 'Recipe 2',
      description: 'description 2 ...',
      difficulty: 1,
      date: '02/02/02',
      userId: 1
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'description 3 ...',
      difficulty: 5,
      date: '03/03/03',
      userId: 1
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
    } else {
      // init ...
    }
  }

}
