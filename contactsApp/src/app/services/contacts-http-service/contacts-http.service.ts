import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root'
})
export class ContactsHttpService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any>{
    return this.http.get('src/assets/data/contacts.json');
  }

  saveContact(contact): Observable<any>{
    return this.http.get('src/assets/data/contacts.json',contact);
  }

  deleteContact(phone):Observable<any>{
    return this.http.get('src/assets/data/contacts.json',phone);
  }
}
