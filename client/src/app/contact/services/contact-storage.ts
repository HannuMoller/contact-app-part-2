import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";

export interface ContactStorage {

  findContacts();

  saveContact(contact: Contact);

  removeContact(contact: Contact);

  addContact(contact: Contact);

}
