import { Component, OnInit, Injectable, } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { I18n, CustomDatepickerI18n } from '../../injectables/custom-date-picker-i18n';
import { List } from '../../models/list';
import { Item } from '../../models/item';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'my-generic-list',
  templateUrl: './my-generic-list.component.html',
  styleUrls: ['./my-generic-list.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class MyGenericListComponent implements OnInit {

  // Form
  name: string = '';
  inputDate;
  inputNewItemName = '';
  modeAddItem : boolean = false;

  // Data
  lists: List[];
  items: Item[];

  constructor (
    private modalService: NgbModal,
    config: NgbDatepickerConfig,
    private restService: RestService
  ) {
    // TODO: remove date picker and modal
    let today = new Date();
    this.inputDate = {
      year: today.getFullYear(),
      month: today.getMonth()+1,
      day:  today.getDate()
    };
    config.minDate = this.inputDate;
  }

  ngOnInit() {
    // START LOADING
    this.restService.getLists()
    .then(function(res) {
      this.lists = res;
      return this.restService.getItems();
    })
    .then(function(res) {
      this.items = res;
    });
    // STOP LOADING
  }

  /** Open modal dialog */
  open(content) {
    this.modalService.open(content);
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
    // START LOADING
    this.restService.createItem(item)
    .then(function() {
      return this.restService.getItems();
    })
    .then(function() {
      // STOP LOADING
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
    var index = this.items.indexOf(item, 0);
    if (index > -1) {
       this.items.splice(index, 1);
    }
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
        date: '01/01/0101',
        listId: 1
      }
      this.createItem(item);
      // Clear input text
      this.inputNewItemName = '';
    }
  }

}
