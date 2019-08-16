# Contacts Management app

Contacts Management  App 

Instructions to run the application :
1.	Pre-requisites :  One needs to have node.js and angular-cli installed for running this application
2.	Download the application code from github link “https://github.com/viresh-khandelwal/evolent-assignment”
3.	Go to the path “evolent-assignment/contactsApp/”  where package.json file is present
4.	Open command prompt and run command “npm install” which would install node-modules.
5.	Now run the command “ng serve” .
6.	When the application compiles successfully open the browser and in the address bar type address “http://localhost:4200/ “and then       you will be to see the application in your browser.
7.	To see the mobile view , go to the browesr console and press the mobile icon.
8.	There is an “AppScreenshots” folder which contains the screenshots of different pages of the application in mobile and desktop view     One can see these screeshots to check whether the application is working correctly or not


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
