import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() editContact: EventEmitter<Contact>;
  @Output() removeContact: EventEmitter<Contact>;
  @Output() showContactOnMap: EventEmitter<Contact>;

  constructor() {
    this.editContact = new EventEmitter<Contact>();
    this.removeContact = new EventEmitter<Contact>();
    this.showContactOnMap = new EventEmitter<Contact>();
  }

  ngOnInit() {
  }

  edit(contact: Contact) {
    alert('edit @contact-list');
    this.editContact.emit(contact);
  }

  remove(contact: Contact) {
    alert('remove @contact-list');
    this.removeContact.emit(contact);
  }

  showOnMap(contact: Contact) {
    alert('showOnMap @contact-list');
    this.showContactOnMap.emit(contact);
  }

}
