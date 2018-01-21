import { Component, OnInit, Injectable, Input } from '@angular/core';
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

  // TODO: refacto getItems !
  // Form
  inputNewItemName = '';
  modeAddItem : boolean = false;

  // Data
  loading: boolean;
  @Input() lists: List[];
  @Input() items: Item[];

  constructor (
    private modalService: NgbModal,
    private restService: RestService,
    private converterService: ConverterService
  ) { }

  ngOnInit() {
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
      return scope.restService.getItems();
    })
    .then(function(resItems) {
      scope.items = scope.converterService.convertBoolean(resItems);
      scope.loading = false;
    });
  }

  /** Refresh items from server */
  refreshItems() {
    let scope = this;
    scope.loading = true;
    scope.restService.getItems()
    .then(function(resItems) {
      scope.items = scope.converterService.convertBoolean(resItems);
      scope.loading = false;
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
      return scope.restService.getItems();
    })
    .then(function(resItems) {
      scope.items = scope.converterService.convertBoolean(resItems);
      scope.loading = false;
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
        listId: 1
      }
      this.createItem(item);
      // Clear input text
      this.inputNewItemName = '';
    }
  }

}
