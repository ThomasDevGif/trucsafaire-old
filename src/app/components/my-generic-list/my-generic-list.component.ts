import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { List } from '../../models/list';
import { Item } from '../../models/item';
import { RestService } from '../../services/rest.service';
import { ConverterService } from '../../utils/converter.service';

@Component({
  selector: 'my-generic-list',
  templateUrl: './my-generic-list.component.html',
  styleUrls: ['./my-generic-list.component.css']
})
export class MyGenericListComponent implements OnInit {

  // Form
  inputNewItemName = '';
  modeAddItem : boolean = false;

  // Data
  loading: boolean;
  items: Item[];
  @Input() list: List;

  // Emitter to get data from parent
  @Output() refreshDataEvent = new EventEmitter<Object>();

  constructor (
    private restService: RestService,
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    this.refreshItems();
  }

  /** Refresh items from server */
  refreshItems() {
    let scope = this;
    scope.loading = true;
    scope.restService.getItemsByList(scope.list.id)
    .then(function(resItems) {
      scope.items = scope.converterService.convertBoolean(resItems);
      scope.loading = false;
    });
  }

  /** Filter items by done */
  filterItems(done: boolean) : Item[] {
    if (this.items == null) {
      return new Array<Item>();
    }
    return this.items.filter(item => item.done == done);
  }

  /** Create item */
  createItem(item : Item) {
    let scope = this;
    scope.loading = true;
    scope.restService.createItem(item)
    .then(function() {
      scope.refreshItems();
    });
  }

  /** Select or unselect all items */
  selectAll(select : boolean) {
    for (let item of this.items) {
      item.done = select;
    }
  }

  /** Delete an item */
  deleteItem($event : any) {
    var item = $event.dragData;
    let scope = this;
    scope.loading = true;
    scope.restService.deleteItem(item)
    .then(function(res) {
      scope.refreshItems();
    });
  }

  /** Delete an list */
  deleteList() {
    let scope = this;
    scope.loading = true;
    scope.restService.deleteList(scope.list)
    .then(function() {
      scope.loading = false;
      scope.refreshDataEvent.next();
    });
  }

  /** Allow user to add new items */
  addNewItem() {
    this.modeAddItem = !this.modeAddItem;
  }

  /** Create item on press enter */
  private handleKeyDown(event: any) {
    if (event.keyCode == 13 && this.inputNewItemName != '') {
      let item : Item = {
        id: null,
        name: this.inputNewItemName,
        done: false,
        date: moment().format("DD/MM/YYYY"),
        listId: this.list.id
      }
      this.createItem(item);
      // Clear input text
      this.inputNewItemName = '';
    }
  }

}
