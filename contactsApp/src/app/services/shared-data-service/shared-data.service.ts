import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() { }
  private contacts = new BehaviorSubject<any>("");
  private selectedContact = new BehaviorSubject<any>("");

  getSelectedContact():BehaviorSubject<any>{
    return this.selectedContact;
  }

  setSelectedContact(contact): void{
    this.selectedContact.next(contact);
 }

  getContacts(): BehaviorSubject<any>{
     return this.contacts;
  }

  setContacts(contacts): void{
     this.contacts.next(contacts);
  }
}
