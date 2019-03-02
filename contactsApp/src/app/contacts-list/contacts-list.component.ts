import { Component, OnInit } from '@angular/core';
import { ContactsListService } from './contacts-list-service.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  public isCollapsed = false;
  constructor(private contactsListService: ContactsListService) { }

  ngOnInit() {
    this.contactsListService.getContacts().subscribe((contacts) => {
      console.log(contacts);
    })

    
  }

}
