import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { Type } from '../models/type';

@Injectable()
export class RestService {

  private baseUrl = './assets/server/';

  constructor(private http: Http) { }

  getTypes() {
    this.http.get(this.baseUrl + 'type/getTypes.php')
    .toPromise()
    .then(res => console.log(res));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }

}
