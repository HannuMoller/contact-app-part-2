import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private storageKey:string = 'contacts';

  private contacts: Contact[] = [];

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
    }

    this.contacts = JSON.parse(localStorage.getItem(this.storageKey));
  }

  public findContacts(): Contact[] {
    return this.contacts;
  }

  public saveContacts(contacts: Contact[]) {
    this.contacts = contacts;
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  public saveContact(contact: Contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    this.saveContacts(this.contacts);
  }

  public removeContact(contact: Contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts.splice(index,1);
    this.saveContacts(this.contacts);
  }

  public addContact(contact: Contact) {
    let nextId = 0;
    let lastId = this.contacts.map(function (c) {
      if (c.id > nextId) {
        nextId = c.id
      }
    });
    nextId++;
    contact.id = nextId;
    this.contacts.push(contact);
    this.saveContacts(this.contacts);
  }

}
