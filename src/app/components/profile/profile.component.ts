import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Variables
  loggedUser: User;
  loading: boolean = false;

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
    }
  }

  /** Delete user from local storage */
  logout() {
    this.authentificationService.logout();
  }

  /** Change user password */
  updatePassword() {
    let scope = this;
    scope.loading = true;
    scope.restService.updateUserPassword(scope.loggedUser)
    .then(function(res) {
      scope.authentificationService.login(scope.loggedUser);
      scope.loading = false;
    });
  }

}
