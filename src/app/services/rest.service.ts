import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';
import { List } from '../models/list';
import { User } from '../models/user';
import { SharedList } from '../models/sharedList';

@Injectable()
export class RestService {

  private baseUrl = './assets/server/';
  private headers = new Headers();

  constructor(private http: Http) { }

  // LIST
  createList(list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'list/createList.php', list)
    .toPromise()
    .catch(this.handleError);
  }

  getListsByUser(user: User) : Promise<List[]> {
    return this.http.post(this.baseUrl + 'list/getListsByUser.php', user)
    .toPromise()
    .then(res => res.json() as List[])
    .catch(this.handleError);
  }

  deleteList(list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'list/deleteList.php', list.id)
    .toPromise()
    .catch(this.handleError);
  }

  // ITEM
  createItem(item: Item) : Promise<any> {
    return this.http.post(this.baseUrl + 'item/createItem.php', item)
    .toPromise()
    .catch(this.handleError);
  }

  getItems() : Promise<Item[]> {
    return this.http.get(this.baseUrl + 'item/getItems.php')
    .toPromise()
    .then(res => res.json() as Item[])
    .catch(this.handleError);
  }

  getItemsByList(listId) : Promise<Item[]> {
    return this.http.post(this.baseUrl + 'item/getItemsByList.php', listId)
    .toPromise()
    .then(res => res.json() as Item[])
    .catch(this.handleError);
  }

  deleteItem(item: Item) : Promise<any> {
    return this.http.post(this.baseUrl + 'item/deleteItem.php', item.id)
    .toPromise()
    .catch(this.handleError);
  }

  deleteItemsByList(list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'item/deleteItems.php', list.id)
    .toPromise()
    .catch(this.handleError);
  }

  updateItem(item: Item) : Promise<any> {
    return this.http.post(this.baseUrl + 'item/updateItem.php', item)
    .toPromise()
    .catch(this.handleError);
  }

  // USER
  createUser(user: User) : Promise<any> {
    return this.http.post(this.baseUrl + 'user/createUser.php', user)
    .toPromise()
    .catch(this.handleError);
  }

  getUserByName(user: User) : Promise<User[]> {
    return this.http.post(this.baseUrl + 'user/getUserByName.php', user)
    .toPromise()
    .then(res => res.json() as User[])
    .catch(this.handleError);
  }

  getUserByLogin(user: User) : Promise<User[]> {
    return this.http.post(this.baseUrl + 'user/getUserByLogin.php', user)
    .toPromise()
    .then(res => res.json() as User[])
    .catch(this.handleError);
  }

  getUsers() : Promise<User[]> {
    return this.http.get(this.baseUrl + 'user/getUsers.php')
    .toPromise()
    .then(res => res.json() as User[])
    .catch(this.handleError);
  }

  updateUserPassword(user: User) : Promise<any> {
    return this.http.post(this.baseUrl + 'user/updateUserPassword.php', user)
    .toPromise()
    .catch(this.handleError);
  }

  // sharedList
  createSharedList(shareList: SharedList) : Promise<any> {
    return this.http.post(this.baseUrl + 'sharedList/createSharedList.php', shareList)
    .toPromise()
    .catch(this.handleError);
  }

  getSharedUsersByList(list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'sharedList/getSharedUsersByList.php', list.id)
    .toPromise()
    .then(res => res.json() as User[])
    .catch(this.handleError);
  }

  getSharedListsByUser(user: User) : Promise<any> {
    return this.http.post(this.baseUrl + 'sharedList/getSharedListsByUser.php', user.id)
    .toPromise()
    .then(res => res.json() as List[])
    .catch(this.handleError);
  }

  deleteSharedListByList(list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'sharedList/deleteSharedListByList.php', list.id)
    .toPromise()
    .catch(this.handleError);
  }

  deleteSharedUserByList(user: User, list: List) : Promise<any> {
    return this.http.post(this.baseUrl + 'sharedList/deleteSharedUserByList.php', {
      userId: user.id,
      listId: list.id
    })
    .toPromise()
    .catch(this.handleError);
  }

  /**
   * Generic function to reject promise
   */
  private handleError(error: any): Promise<any> {
    console.error('[ERROR] ', error);
    return Promise.reject(error.message || error);
  }

}
