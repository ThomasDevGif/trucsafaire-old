import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private defaultListGridOption: string = 'col-md-6';

  constructor() { }

  setListGridOption(listGridOption: string) {
    localStorage.setItem('list_grid_option', listGridOption);
  }

  getListGridOption() : string {
    var opt = localStorage.getItem('list_grid_option');
    if (undefined == opt) {
      return this.defaultListGridOption;
    } else {
      return opt;
    }
  }

}
