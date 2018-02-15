import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  loading: boolean = false;
  displayInputError: boolean = false;
  displayInputNameWarning: boolean = false;
  user: User = {
    id: null,
    name: null,
    password: null
  };

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  /** Check if input are valid */
  checkInput() {
    this.displayInputNameWarning = false;
    if (null == this.user.name || this.user.name == ''
      || null == this.user.password || this.user.password == '') {

      this.displayInputError = true;
      return false;
    } else {
      return true;
    }
  }

  /** Log user */
  login() {
    console.log('Login.');
    if (!this.checkInput()) {
      return;
    }
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
      console.log(resUser);
      if (resUser.length > 0) {
        scope.displayInputNameWarning = true;
        return;
      } else {
        return scope.restService.createUser(scope.user);
      }
    })
    .then(function(resUser) {
      scope.resetForm();// TODO only in login
      scope.loading = false;
    });
  }

  /** Reset input value */
  resetForm() {
    this.user.name = null;
    this.user.password = null;
  }

}
