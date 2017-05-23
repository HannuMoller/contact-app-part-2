/**
 * Created by ekoodi on 08/05/2017.
 */
import {inject, TestBed} from '@angular/core/testing';

import {ContactLocalStorageService} from './contact-localstorage.service';
import {Contact} from "../contact";
import * as _ from 'lodash';

describe('ContactLocalStorageService', () => {

  let storageKey = 'contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  // Local Storage mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key, value) => {
      store[key] = value;
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'Aku','Ankka','040-1234567','katu1','kaupunki1'),
      new Contact(2, 'Roope','Ankka','040-1234568','katu2','kaupunki2'),
      new Contact(3, 'Iines','Ankka','040-1234569','katu3','kaupunki3')
    ];
  }

  it('Should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let data = localStorage.getItem(storageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    let contactIds = _.map(contacts, 'id');
    localStorage.setItem(storageKey,JSON.stringify(contacts));
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, (c) => {
        expect(contactIds).toContain(c.id);
      });
    });
  }));

  it('#addContact should return added contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(storageKey,JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    let newContact = new Contact(4,'Pelle','Peloton','045-2345678','Keksintökuja 6','Ankkalinna');
    service.addContact(newContact).subscribe((contact: Contact) => {
      expect(contactIds).not.toContain(contact.id);
      service.findContacts().subscribe((contacts: Contact[]) => {
        expect(contacts.length).toBe(4);
        let contactIds = _.map(contacts, 'id');
        expect(contactIds).toContain(contact.id);
      });
    });
  }));

  it('#saveContact should return saved contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(storageKey,JSON.stringify(contacts));
    let contact = contacts[1];
    let oldName = contact.firstName;
    contact.firstName = 'Aapeli';
    service.saveContact(contact).subscribe((contact: Contact) => {
      service.findContacts().subscribe((contacts: Contact[]) => {
        expect(contacts.length).toBe(3);
        let contactNames = _.map(contacts, 'firstName');
        expect(contactNames).toContain(contact.firstName);
        expect(contactNames).not.toContain(oldName);
      });
    });
  }));

  it('#removeContact should delete contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(storageKey,JSON.stringify(contacts));
    let contactToBeDeleted = contacts[1];
    service.removeContact(contactToBeDeleted).subscribe((contact: Contact) => {
      service.findContacts().subscribe((contacts: Contact[]) => {
        expect(contacts.length).toBe(2);
        let contactIds = _.map(contacts, 'id');
        expect(contactIds).not.toContain(contact.id);
      });
    });
  }));

});
