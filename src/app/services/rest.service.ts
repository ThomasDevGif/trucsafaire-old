import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';
import { List } from '../models/list';

@Injectable()
export class RestService {

  private baseUrl = './assets/server/';

  constructor(private http: Http) { }

  // LIST
  createList(list: List) {
    this.http.post(this.baseUrl + 'list/createList.php', list)
    .toPromise()
    .then(res => console.log(res))
    .catch(this.handleError);
  }

  getLists() : Promise<List[]> {
    return this.http.get(this.baseUrl + 'list/getLists.php')
    .toPromise()
    .then(res => res.json() as List[])
    .catch(this.handleError);
  }

  /**
   * Generic function to reject promise
   */
  private handleError(error: any): Promise<any> {
    console.error('ERROR: ', error);
    return Promise.reject(error.message || error);
  }

}
