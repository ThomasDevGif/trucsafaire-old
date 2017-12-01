import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { MyGenericItemComponent } from './components/my-generic-item/my-generic-item.component';

import { RestService } from './services/rest.service';
import { MyGenericListComponent } from './components/my-generic-list/my-generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MyGenericItemComponent,
    MyGenericListComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
