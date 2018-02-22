import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../models/list';
import { Item } from '../../models/item';
import { User } from '../../models/user';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';
import { ConverterService } from '../../utils/converter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Data
  @ViewChild('tabLists') tabLists;
  loading: boolean;
  lists: List[];
  sharedLists: List[];
  loggedUser: User;

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private converterService: ConverterService,
    private router: Router
  ) { }

  // If no logged user in local storage, redirect to login page
  ngOnInit() {
    this.loggedUser = this.authentificationService.getUser();
    if (undefined == this.loggedUser) {
      this.router.navigate(['/login'])
    } else {
      this.refreshLists();
    }
  }

  // Refresh tabs of lists
  refreshLists() {
    let scope = this;
    scope.loading = true;
    scope.restService.getListsByUser(scope.loggedUser)
    .then(function(resLists) {
      scope.lists = resLists;
      return scope.restService.getSharedListsByUser(scope.loggedUser);
    })
    .then(function(resSharedLists) {
      scope.sharedLists = resSharedLists;
      scope.loading = false;
    });
  }

}
