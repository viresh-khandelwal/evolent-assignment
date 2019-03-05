import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

let routes: Routes = [
  {path: "contact-card", component: ContactCardComponent },
  {path: "add", component: EditContactComponent},
  {path: "edit/:phone", component: EditContactComponent},
  {path: "", component: ContactsListComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
