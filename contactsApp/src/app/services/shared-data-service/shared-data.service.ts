import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ContactsHttpService } from '../contacts-http-service/contacts-http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor(
    private router: Router,
    private contactsHttpService: ContactsHttpService
  ) { }
  private contacts = new BehaviorSubject<any>("");
  private selectedContact = new BehaviorSubject<any>("");

  getSelectedContact(): BehaviorSubject<any> {
    return this.selectedContact;
  }

  setSelectedContact(contact): void {
    this.selectedContact.next(contact);
  }

  getContacts(): BehaviorSubject<any> {
    return this.contacts;
  }

  setContacts(contacts): void {
    this.contacts.next(contacts);
  }

  deleteContact(phone): void {
    this.contactsHttpService.deleteContact(phone).subscribe((data) => {
      let contactIndex: number;
      let contacts = this.contacts.value;
      contacts.find((contact, index) => {
        if (contact.phone == phone) {
          contactIndex = index;
          return true;
        } else {
          return false;
        }
      })
      contacts.splice(contactIndex, 1);
      this.setContacts(contacts);
    });

  }

  openContactEditPage(contact): void {
    this.setSelectedContact(contact);
    this.router.navigate(['edit', contact.phone])
  }

  saveContact(contact, operationType): void {
    this.contactsHttpService.saveContact(contact).subscribe((data) => {
      console.log("contact saved successfully");
      if (operationType == 'add') {
        let contacts = this.contacts.value;
        contacts.push(contact);
        this.setContacts(contacts);
      }
      this.router.navigate(['']);
    })
  }

}
