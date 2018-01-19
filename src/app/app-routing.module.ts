import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from  './components/list/list.component';

// Components

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
