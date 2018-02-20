import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  // Emitter to use function from parent
  @Output() deleteItemFromParent = new EventEmitter<Object>();

  constructor(
    private restService: RestService,
    private modalService: NgbModal,
  ) { }

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

  /** Delete an item */
  deleteItemFromChild() {
    this.deleteItemFromParent.next(this.item);
  }

  /** Open modal dialog */
  openModal(content) {
    let scope = this;
    scope.modalService.open(content).result.then(function(result) {
      if (result == 'delete') {
        scope.deleteItemFromChild();
      }
    }, (reason) => {
      // Do nothing on esc click
    });
  }


}
