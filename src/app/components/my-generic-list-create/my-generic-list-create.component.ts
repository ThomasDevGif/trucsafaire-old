import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../models/list';
import { User } from '../../models/user';
import { RestService } from '../../services/rest.service';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'my-generic-list-create',
  templateUrl: './my-generic-list-create.component.html',
  styleUrls: ['./my-generic-list-create.component.css']
})
export class MyGenericListCreateComponent implements OnInit {

  name: string = '';
  loading: boolean = false;
  // Emitter to get data from parent
  @Output() refreshDataEvent = new EventEmitter<Object>();
  loggedUser: User;

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

  create() {
    let scope = this;
    let list : List = {
      id : null,
      name : scope.name,
      userId : this.loggedUser.id
    };

    scope.loading = true;
    scope.restService.createList(list)
    .then(function(res) {
      scope.loading = false;
      scope.refreshDataEvent.next();
      scope.name = '';
    });
  }

  /** Create list on press enter */
  private handleKeyDown(event: any) {
    if (event.keyCode == 13 && this.name != '') {
      this.create();
    }
  }

}
