import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {

  constructor() { }

  login(name: string, password: string) {
    // var user = {};
    // // REST GET USER
    // localStorage.setItem('user', JSON.stringify(user));
    // return user;
    return null;
  }

  logout() {
      // Remove user from local storage to log user out
      localStorage.removeItem('user');
  }

}
