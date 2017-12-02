import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { I18n, CustomDatepickerI18n } from '../../injectables/custom-date-picker-i18n';
import { List } from '../../models/list';
import { Item } from '../../models/item';

@Component({
  selector: 'my-generic-list',
  templateUrl: './my-generic-list.component.html',
  styleUrls: ['./my-generic-list.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class MyGenericListComponent implements OnInit {

  closeResult: string;

  // Form
  name: string = '';
  inputDate;

  lists: List[] = [
    {
      id: 1,
      name: 'Auchan',
      idType: 1
    },
    {
      id: 2,
      name: 'Picard',
      idType: 1
    }
  ]

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
    }
  ]

  constructor(private modalService: NgbModal, config: NgbDatepickerConfig) {
    let today = new Date();
    this.inputDate = {
      year: today.getFullYear(),
      month: today.getMonth()+1,
      day:  today.getDate()
    };
    config.minDate = this.inputDate;
  }

  ngOnInit() {

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

}
