import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms'
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';

import { RestService } from './services/rest.service';
import { ConverterService } from './utils/converter.service';
import { NgbDateMomentParserFormatter } from './injectables/custom-date-formatter';

import { AppComponent } from './app.component';
import { MyGenericItemComponent } from './components/my-generic-item/my-generic-item.component';
import { MyGenericListComponent } from './components/my-generic-list/my-generic-list.component';
import { MyGenericListCreateComponent } from './components/my-generic-list-create/my-generic-list-create.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGenericItemComponent,
    MyGenericListComponent,
    MyGenericListCreateComponent,
    AutofocusDirective,
    ListComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [
    RestService,
    ConverterService,
    {
      provide: NgbDateParserFormatter,
      useFactory: () => { return new NgbDateMomentParserFormatter("DD/MM/YYYY") }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
