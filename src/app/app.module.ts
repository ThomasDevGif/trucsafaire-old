import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms'
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgSelectModule } from '@ng-select/ng-select';

import { RestService } from './services/rest.service';
import { AuthentificationService } from './services/authentification.service';
import { SettingsService } from './services/settings.service';
import { ConverterService } from './utils/converter.service';
import { NgbDateMomentParserFormatter } from './injectables/custom-date-formatter';

import { AppComponent } from './app.component';
import { MyGenericItemComponent } from './components/my-generic-item/my-generic-item.component';
import { MyGenericListComponent } from './components/my-generic-list/my-generic-list.component';
import { MyGenericListCreateComponent } from './components/my-generic-list-create/my-generic-list-create.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ListComponent } from './components/list/list.component';
import { MyGenericLoaderComponent } from './components/my-generic-loader/my-generic-loader.component';
import { MyGenericModalConfirmComponent } from './components/my-generic-modal-confirm/my-generic-modal-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGenericItemComponent,
    MyGenericListComponent,
    MyGenericListCreateComponent,
    AutofocusDirective,
    ListComponent,
    MyGenericLoaderComponent,
    MyGenericModalConfirmComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DndModule.forRoot(),
    ShowHidePasswordModule.forRoot(),
    NgSelectModule
  ],
  providers: [
    RestService,
    AuthentificationService,
    ConverterService,
    SettingsService,
    {
      provide: NgbDateParserFormatter,
      useFactory: () => { return new NgbDateMomentParserFormatter("DD/MM/YYYY") }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
