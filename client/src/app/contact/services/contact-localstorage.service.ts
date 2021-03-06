import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class ContactLocalStorageService implements ContactStorage {

  private storageKey:string = 'contacts';

  private contacts: Contact[] = [];

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
    }

    this.findContacts();
  }

  public findContacts() {
    this.contacts = JSON.parse(localStorage.getItem(this.storageKey));
    return Observable.of(this.contacts);
  }

  private saveContacts(contacts: Contact[]) {
    this.contacts = contacts;
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  public saveContact(contact: Contact) {
    this.findContacts();
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    this.saveContacts(this.contacts);
    return Observable.of(contact);
  }

  public removeContact(contact: Contact) {
    this.findContacts();
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts.splice(index,1);
    this.saveContacts(this.contacts);
    return Observable.of(contact);
  }

  public addContact(contact: Contact) {
    this.findContacts();
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
    return Observable.of(contact);
  }

}
