import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Recipe } from '../../models/recipe';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  // Variables
  loggedUser: User;
  loading: boolean = false;
  users: User[] = [
    {
      id: 1,
      name: 'Thomas',
      password: ''
    }, {
      id: 2,
      name: 'User',
      password: ''
    }
  ]

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Recette de ouf qui me fatigue beaucoup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 2,
      date: '01/01/01',
      time: 20,
      userId: 1
    }, {
      id: 2,
      name: 'Recipe 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 1,
      date: '02/02/02',
      time: 90,
      userId: 1
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }, {
      id: 3,
      name: 'Recipe 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      difficulty: 5,
      date: '03/03/03',
      time: 30,
      userId: 2
    }
  ]

  // Options
  maxTime: number;
  maxDifficulty: number;
  onlyFavorites: boolean = false;

  switchOn: string = "Oui";
  switchOff: string = "Non";
  switchOnColor: string = "green";
  switchOffColor: string = "red";

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
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
   * Get user name associate to recipe userId
   * @param {number} userID
   */
  getRecipeUser(userId : number) : string {
    let user: User[] = this.users.filter(user => user.id === userId);
    return user[0].name;
  }

  /**
   * Change url
   * @param {string} link
   */
  goTo(link: string) {
    this.router.navigate(['/recipe/create'])
  }

}
