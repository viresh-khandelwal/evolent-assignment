import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ContactsListService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any>{
    return this.http.get('src/assets/data/contacts.json');
  }
}
