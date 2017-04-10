import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact>;
  @Output() remove: EventEmitter<Contact>;
  @Output() showOnMap: EventEmitter<Contact>;

  constructor() {
    this.edit = new EventEmitter<Contact>();
    this.remove = new EventEmitter<Contact>();
    this.showOnMap = new EventEmitter<Contact>();
  }

  ngOnInit() {

  }

  editContact() {
    //( alert('editContact @contact-list-item');
    this.edit.emit(this.contact);
  }

  removeContact() {
    // alert('removeContact @contact-list-item');
    this.remove.emit(this.contact);
  }

  showContactOnMap() {
    // alert('showContactOnMap @contact-list-item');
    this.showOnMap.emit(this.contact);
  }
}
