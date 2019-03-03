import { Component } from '@angular/core';
import { ContactsHttpService } from './services/contacts-http-service/contacts-http.service';
import { SharedDataService } from './services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private contacts: any;
  constructor(
    private contactsHttpService: ContactsHttpService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    this.contactsHttpService.getContacts().subscribe((data) => {
      console.log(data);
      this.contacts = data.contacts;
      this.sharedDataService.setContacts(this.contacts);
    })   
  }
}
