import { Component } from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact App, Angular 4 version';

  contacts: Contact[];
  contactText: string;

  constructor(contactService: ContactService) {

    this.contacts = contactService.findContacts();
    // alert('contacts:'+this.contacts.length);
    this.contactText = this.contacts[0].firstName;
  }

  editContact(contact: Contact) {
    alert('edit contact #'+contact.id);
  }

  removeContact(contact: Contact) {
    alert('remove contact #'+contact.id);
  }

  showContactOnMap(contact: Contact) {
    alert('show contact #'+contact.id+' on map');
  }

  addContact() {
    alert('Mayde I add, maybe not...');
  }
}
