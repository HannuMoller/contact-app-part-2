import { Injectable } from '@angular/core';
import {ContactHttpService} from "./contact-http.service";
import {ContactLocalStorageService} from "./contact-local-storage.service";
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";


@Injectable()
export class ContactService {

  private contactService: ContactStorage;

  constructor(private contactHttpService: ContactHttpService, private contactLocalStorageService: ContactLocalStorageService) {
    this.contactService = environment.serverUrl ? contactHttpService : contactLocalStorageService;
  }

  public findContacts() {
    return this.contactService.findContacts();
  }

  public saveContact(contact: Contact) {
    return this.contactService.saveContact(contact);
  }

  public removeContact(contact: Contact) {
    return this.contactService.removeContact(contact);
  }
  public addContact(contact: Contact) {
    return this.contactService.addContact(contact);
  }
}
