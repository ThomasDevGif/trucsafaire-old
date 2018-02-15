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
  loggedUser: User;

  constructor(
    private restService: RestService,
    private authentificationService: AuthentificationService,
    private converterService: ConverterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedUser = this.authentificationService.getUser();
    if (undefined == this.loggedUser) {
      this.router.navigate(['/login'])
    } else {
      this.refreshLists(null);
    }
  }

  refreshLists(changeTab) {
    let scope = this;
    scope.loading = true;
    scope.restService.getLists()
    .then(function(resLists) {
      scope.lists = resLists;
      scope.loading = false;
      if (null != changeTab) {
        // TODO: select created list
        // scope.tabLists.select(changeTab);
      }
    });
  }

}
