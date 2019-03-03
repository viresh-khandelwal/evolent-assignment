import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ToggleCardBodyDirective } from './directives/toggle-card-body.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactCardComponent,
    ToggleCardBodyDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
