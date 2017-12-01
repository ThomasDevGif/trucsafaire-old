import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { List } from '../models/list';
import { Item } from '../models/item';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "Card title";
  date = "dd/mm/yyyy";
  closeResult: string;

  // Form
  name: string = '';

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

  constructor(private modalService: NgbModal) {}

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

}
