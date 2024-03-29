import { Component, OnInit } from '@angular/core';

import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trucs A Faire';
  items = [
    { name: 'Course', link: '/course' }
  ]

  constructor (
    private restService: RestService
  ) { }

  ngOnInit() {
    // this.restService.getTypes();
  }

}
