import { Component, OnInit, Input} from '@angular/core';
import { SharedDataService } from '../services/shared-data-service/shared-data.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) { }
  contact:any;

  ngOnInit() {
    this.sharedDataService.getSelectedContact().subscribe((contact) => {
      this.contact = contact;
    })
  }

}
