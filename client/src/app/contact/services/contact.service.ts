import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private storageKey:string = 'contacts';

  private contacts: Contact[] = [];

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      this.contacts.push(new Contact(1,'Jaakko','Parantainen','040-5123624','Sairaalantie 4','Lempäälä'));
      this.contacts.push(new Contact(2,'Aku','Ankka','05-313','Paratiisitie 4','Ankkalinna'));
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

  public addContact(contact: Contact) {

  }

}
