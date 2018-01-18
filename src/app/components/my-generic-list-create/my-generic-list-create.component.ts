import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'my-generic-list-create',
  templateUrl: './my-generic-list-create.component.html',
  styleUrls: ['./my-generic-list-create.component.css']
})
export class MyGenericListCreateComponent implements OnInit {

  name: string;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  create() {
    let list : List = {
      id : 1,
      name : this.name,
      idType : 1
    };

    console.log('Create : ' + JSON.stringify(list));
    this.restService.createList(list);
  }

}
