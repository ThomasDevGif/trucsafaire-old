import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  loading: boolean = false;
  displayInputNameWarning: boolean = false;
  displayWrongLogin: boolean = false;
  displaySuccessLogin: boolean = false;
  successLogin: string;
  user: User = {
    id: null,
    name: null,
    password: null
  };

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit() {
  }

  /** Check if input are valid */
  checkInput() {
    // Hide messages
    this.displayInputNameWarning = false;
    this.displayWrongLogin = false;
    this.displaySuccessLogin = false;

    return !(null == this.user.name || this.user.name == ''
      || null == this.user.password || this.user.password == '');
  }

  /** Log user */
  login() {
    if (!this.checkInput()) {
      return;
    }
    let scope = this;
    scope.loading = true;
    scope.restService.getUserByLogin(scope.user)
    .then(function(resUser) {
        scope.loading = false;
      if (resUser.length > 0) {
        scope.authentificationService.login(resUser[0]);
      } else {
        scope.displayWrongLogin = true;
      }
    })
  }

  /** Register and log user */
  register() {
    if (!this.checkInput()) {
      return;
    }
    let scope = this;
    scope.loading = true;
    scope.restService.getUserByName(scope.user)
    .then(function(resUser) {
      if (resUser.length > 0) {
        scope.displayInputNameWarning = true;
        return;
      } else {
        return scope.restService.createUser(scope.user);
      }
    })
    .then(function(resUser) {
      scope.successLogin = scope.user.name;
      scope.displaySuccessLogin = true;
      scope.resetForm();
      scope.loading = false;
    });
  }

  /** Reset input value */
  resetForm() {
    this.user.name = null;
    this.user.password = null;
  }

}
