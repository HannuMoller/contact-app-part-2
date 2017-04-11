import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Input() editContact: EventEmitter<Contact>;
  @Input() removeContact: EventEmitter<Contact>;
  @Input() showContactOnMap: EventEmitter<Contact>;

  constructor() {
    this.editContact = new EventEmitter<Contact>();
    this.removeContact = new EventEmitter<Contact>();
    this.showContactOnMap = new EventEmitter<Contact>();
  }

  ngOnInit() {

  }

  edit() {
    //( alert('editContact @contact-list-item');
    this.editContact.emit(this.contact);
  }

  remove() {
    // alert('removeContact @contact-list-item');
    this.removeContact.emit(this.contact);
  }

  showOnMap() {
    // alert('showContactOnMap @contact-list-item');
    this.showContactOnMap.emit(this.contact);
  }
}
