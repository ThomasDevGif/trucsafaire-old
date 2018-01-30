import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('tabLists') tabLists;
  loading: boolean;
  lists: List[];

  constructor(
    private restService: RestService,
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    this.refreshLists(null);
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
