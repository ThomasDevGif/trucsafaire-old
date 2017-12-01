import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../models/item';

@Component({
  selector: 'my-generic-item',
  templateUrl: './my-generic-item.component.html',
  styleUrls: ['./my-generic-item.component.css']
})
export class MyGenericItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.item.done = !this.item.done;
  }

}
