import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms'
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';

import { RestService } from './services/rest.service';
import { NgbDateMomentParserFormatter } from './injectables/custom-date-formatter';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { MyGenericItemComponent } from './components/my-generic-item/my-generic-item.component';
import { MyGenericListComponent } from './components/my-generic-list/my-generic-list.component';
import { MyGenericListCreateComponent } from './components/my-generic-list-create/my-generic-list-create.component';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MyGenericItemComponent,
    MyGenericListComponent,
    MyGenericListCreateComponent,
    AutofocusDirective
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
    {
      provide: NgbDateParserFormatter,
      useFactory: () => { return new NgbDateMomentParserFormatter("DD/MM/YYYY") }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
