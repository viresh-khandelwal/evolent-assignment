import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  private contacts: any;
  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sharedDataService.getContacts().subscribe((data) => {
      this.contacts = data;
    })   
  }

  openContact(contact): void{
     this.sharedDataService.setSelectedContact(contact);
     this.router.navigate(['contact-card']);
  }

}
