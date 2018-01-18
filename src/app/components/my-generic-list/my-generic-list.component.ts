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
  lists: List[] = [
    {
      id: 1,
      name: 'Liste',
      idType: 1
    }
  ];

  items: Item[] = [
    {
      id: 1,
      name: 'Tache 1',
      done: false,
      date: '30/11/2017'
    },
    {
      id: 2,
      name: 'Tache 2',
      done: false,
      date: '30/11/2017'
    },
    {
      id: 3,
      name: 'Tache 3',
      done: false,
      date: '30/11/2017'
    }
  ]

  constructor (
    private modalService: NgbModal,
    config: NgbDatepickerConfig,
    private restService: RestService
  ) {
    let today = new Date();
    this.inputDate = {
      year: today.getFullYear(),
      month: today.getMonth()+1,
      day:  today.getDate()
    };
    config.minDate = this.inputDate;
  }

  ngOnInit() {
    //this.restService.getLists().then(res => this.lists = res);
  }

  open(content) {
    this.modalService.open(content);
  }

  validate() : void {
    if (this.name != '') {
      let list: List = {
        id: 1,
        name: this.name,
        idType: 1
      }
      this.lists.push(list);
      this.name = '';
    }
  }

  filterItems(done: boolean) : Item[] {
    return this.items.filter(item => item.done == done);
  }

  createItem() {
    console.log(this.inputDate);
  }

  /** Create item */
  createItemFromEnter(item : Item) {
    this.items.push(item);
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
        id: 5,
        name: this.inputNewItemName,
        done: false,
        date: '01/01/0101'
      }
      this.createItemFromEnter(item);
      // Clear input text
      this.inputNewItemName = '';
    }
  }

}
