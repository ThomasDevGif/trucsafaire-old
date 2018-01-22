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

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  action() {
    this.item.done = !this.item.done;
    this.restService.updateItem(this.item).then(function(res) {
      console.log('updated');
      console.log(res);
    });
  }

}
