import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../models/item';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'my-generic-item',
  templateUrl: './my-generic-item.component.html',
  styleUrls: ['./my-generic-item.component.css']
})
export class MyGenericItemComponent implements OnInit {

  @Input() item: Item;
  loading: boolean = false;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  checkItem() {
    let scope = this;
    scope.loading = true;
    scope.item.done = !scope.item.done;
    scope.restService.updateItem(scope.item).then(function(res) {
      scope.loading = false;
    });
  }

}
