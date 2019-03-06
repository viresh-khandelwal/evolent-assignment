import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data-service/shared-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contact-list-mobile.component.css', './contacts-list.component.css']
})
export class ContactsListComponent implements OnInit,OnDestroy {
  private contacts: any;
  closeResult: string;
  private contactsSubscription: Subscription;
  
  constructor(
    private sharedDataService: SharedDataService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.contactsSubscription = this.sharedDataService.getContacts().subscribe((data) => {
      this.contacts = data;
    })
  }

  openContact(contact): void {
    this.sharedDataService.setSelectedContact(contact);
    this.router.navigate(['contact-card']);
  }

  openModal(content, phone) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result == 'confirm') {
        this.sharedDataService.deleteContact(phone);
      }
    });
  }

  ngOnDestroy(){
    this.contactsSubscription.unsubscribe();
  }

}
