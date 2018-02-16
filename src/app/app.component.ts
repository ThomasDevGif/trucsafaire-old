import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { RestService } from './services/rest.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedUser: User;
  title = 'Trucs A Faire';
  items = [
    { name: 'Listes', icon: 'fas fa-list-ul', link: '/' },
    { name: 'Profil', icon: 'fas fa-user', link: '/profile' }
  ]

  constructor (
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedUser = this.authentificationService.getUser();
  }

  isActive(link: string) : boolean {
    return link == this.router.url;
  }

}
