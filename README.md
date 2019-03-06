# evolent-assignment

Contacts Management  App 

•	Path to application’s modules, components, and services :   evolent-assignment\contactsApp\src\app

•	Components:

1.	AppComponent : The app component is the root component and all the other components are loaded into it or removed from it as the users navigates through different views of the application.
fileName : app.component.ts

2.	contacts-list : The contacts list component displays the list of contacts.It shows different views for mobile and desktop.
* For mobile view -  the list would just contain the name and mobile number of each contact and a button to add a new contact.
* For Desktop View - the list would contain display the contacts with all their details and options to add , delete or edit contacts.
File-Path: contacts-list/contacts-list.component.ts

3.	contact-card: The contact card component is exclusively for mobile view, it did splays the details of the contact selected by the user from the contact list , it also has the options for editing and deleting the contact.
File-Path: contact-card/ contact-card.component.ts

4.	edit-contact : The edit contact component displays a form to edit a contact or add contact
File-Path:  edit-contact/ edit-contact.component.ts



•	Services
1.	contacts-http-service : This service is used to make http requests. All the http request to get contacts from server , edit a contact or delete a contact go through this service
FilePath: services/ contacts-http-service/ contacts-http.service.ts
2.	shared-data-service : This service is used to share and synchronise data between all the  components of the application
FilePath: services/ shared-data-service / shared-data.service.ts



•	Modules
1.	AppModule : This is the root module of the application , where all the other modules are imported and components are declared
fileName: app.module.ts
2.	app-routing : This is the module where all the application routes are defined
filePath: app-routing/ app-routing.module.ts
