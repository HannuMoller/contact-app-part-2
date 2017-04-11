import { Component, ViewChild } from '@angular/core';
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import { DialogService } from "./contact/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact App, Angular 4 version';

  contacts: Contact[];
  contactText: string;
  dialogServiceRef: DialogService;
  contactServiceRef: ContactService;

  constructor(contactService: ContactService, dialogService: DialogService) {
    this.contacts = contactService.findContacts();
    // alert('contacts:'+this.contacts.length);
    this.contactText = this.contacts[0].firstName;
    this.dialogServiceRef = dialogService;
    this.contactServiceRef = contactService;
  }

  editContact(contact: Contact) {
    // alert('edit contact #'+contact.id);
    let returnValue = this.dialogServiceRef.contactDialog(contact);
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactServiceRef.saveContact(result);
    });

  }


  removeContact(contact: Contact) {
    // alert('remove contact #'+contact.id);
    let returnValue = this.dialogServiceRef.deleteDialog(contact);
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactServiceRef.removeContact(result);
    });

  }

  showContactOnMap(contact: Contact) {
    // alert('show contact #'+contact.id+' on map');
    let resultValue = this.dialogServiceRef.mapDialog(contact);
    resultValue.subscribe();
  }

  addContact() {
    // alert('Maybe I add, maybe not...');
    let returnValue = this.dialogServiceRef.contactDialog();
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactServiceRef.addContact(result);
    });
  }
}
