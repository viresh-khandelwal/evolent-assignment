import { Component, OnInit, OnDestroy} from '@angular/core';
import { SharedDataService } from '../services/shared-data-service/shared-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit, OnDestroy {
  constructor(
    private sharedDataService: SharedDataService,
    private modalService: NgbModal,
    private router: Router
  ) { }
  contact:any;
  contactActive:boolean = true;
  selectedContactSubscription: Subscription;

  ngOnInit() {
    this.selectedContactSubscription = this.sharedDataService.getSelectedContact().subscribe((contact) => {
      this.contact = contact;
      this.contactActive = contact.status == 'active' ? true : false
    })
  }

  openModal(content,phone) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result == 'confirm'){
        this.sharedDataService.deleteContact(phone);
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy(){
    this.selectedContactSubscription.unsubscribe();
  }

}
