import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class AuthentificationService {

  constructor() { }

  login(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() : User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

}
