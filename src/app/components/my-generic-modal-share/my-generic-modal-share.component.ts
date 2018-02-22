import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { List } from '../../models/list';
import { User } from '../../models/user';
import { SharedList } from '../../models/sharedList';

@Component({
  selector: 'my-generic-modal-share',
  templateUrl: './my-generic-modal-share.component.html',
  styleUrls: ['./my-generic-modal-share.component.css']
})
export class MyGenericModalShareComponent implements OnInit {

  @Input() list: List;
  loading: boolean = false;
  users : User[];
  sharedUsers : User[];
  selectedUsersId = null;

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    let self = this;
    self.loading = true;
    self.restService.getUsers()
    .then(function(resUsers) {
      self.users = resUsers;
      return self.restService.getSharedUsersByList(self.list)
    })
    .then(function(resSharedUsers) {
      self.sharedUsers = resSharedUsers;
      self.loading = false;
    });
  }

  shareList() {
    let self = this;
    if (null != self.selectedUsersId) {
      self.loading = true;
      let sharedList = {
        listId: self.list.id,
        userId: self.selectedUsersId
      }
      this.restService.createSharedList(sharedList)
      .then(function() {
        console.log('shared!');
        self.loading = false;
      })
    }
  }

}
