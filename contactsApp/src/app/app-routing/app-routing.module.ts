import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

let routes: Routes = [
  {path: "contact-card", component: ContactCardComponent },
  {path: "", component: ContactsListComponent}
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
