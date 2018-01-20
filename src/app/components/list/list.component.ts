import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';
import { Item } from '../../models/item';
import { RestService } from '../../services/rest.service';
import { ConverterService } from '../../utils/converter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Data
  loading: boolean;
  lists: List[];
  items: Item[];

  constructor(
    private restService: RestService,
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    let scope = this;
    scope.loading = true;
    scope.restService.getLists()
    .then(function(resLists) {
      scope.lists = resLists;
      return scope.restService.getItems();
    })
    .then(function(resItems) {
      scope.items = scope.converterService.convertBoolean(resItems);
      scope.loading = false;
    })
    .catch(function(err) {
      console.log('ERROR: ' + err);
    });
  }

}