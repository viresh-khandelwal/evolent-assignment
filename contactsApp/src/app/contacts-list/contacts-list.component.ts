import { Component, OnInit } from '@angular/core';
import { ContactsListService } from './contacts-list-service.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private isCollapsed = false;
  private contacts: any;
  constructor(private contactsListService: ContactsListService) { }

  ngOnInit() {
    this.contactsListService.getContacts().subscribe((data) => {
      console.log(data);
      this.contacts = data.contacts;
    })

    
  }

}
