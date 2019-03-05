import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) { }

  private contact: Contact
  private contactDetailsForm: FormGroup;
  private operationType: string;
  private submitPressed: boolean = false
  get f() { return this.contactDetailsForm.controls; }

  ngOnInit() {
    //console.log(this.activatedRoute.url);
    this.activatedRoute.params.subscribe(
      (params) => {
        if (!params.phone) {
          this.contact = new Contact();
          this.operationType = 'add';
        } else {
          this.sharedDataService.getSelectedContact().subscribe((contact) => this.contact = contact);
          this.operationType = 'edit';
        }
      });

    this.initializeForm(this.contact);
  }

  initializeForm(contact): void {
    this.contactDetailsForm = new FormGroup({
      firstName: new FormControl(contact.firstName, [Validators.required]),
      lastName: new FormControl(contact.lastName, [Validators.required]),
      phone: new FormControl(contact.phone, [Validators.required, Validators.pattern(/^\d+$/)]),
      email: new FormControl(contact.email, [Validators.required,Validators.email]),
      status: new FormControl(contact.status, [Validators.required]),
    });
  }


  submitForm() {
    if (this.contactDetailsForm.status == "VALID") {
        this.sharedDataService.saveContact(this.contactDetailsForm.value,this.operationType);
    } else {
      this.submitPressed = true;
      console.log("invalid form details",this.f);
    };

  }

}
