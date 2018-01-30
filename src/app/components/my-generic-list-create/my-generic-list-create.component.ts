import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { List } from '../../models/list';
import { RestService } from '../../services/rest.service';

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

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  create() {
    let scope = this;
    let list : List = {
      id : null,
      name : scope.name,
      type : 'simple'
    };

    scope.loading = true;
    scope.restService.createList(list)
    .then(function(res) {
      scope.loading = false;
      scope.refreshDataEvent.next(scope.name);
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
