import {Contact} from "./contact";
import { DialogService } from "./services/dialog.service";
import {Component, Inject, Injectable} from "@angular/core";
import {ContactService} from "./services/contact.service";
import {Router} from "@angular/router";
import {Http, Response, Headers, RequestOptions, RequestMethod} from "@angular/http";


@Component({
  selector: 'component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@Injectable()
export class ContactComponent {
  title = 'Contact App, Angular 4 version';

  contacts: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService, private router: Router) {
//    Listener.setComponent(this);
    this.getContacts();
  }

  getContacts() {
    this.contactService.findContacts()
      .catch(error => this.router.navigate(['login']))
      .subscribe(resp => {
          this.contacts = resp;
      });
  }

  editContact(contact: Contact) {
    // alert('edit contact #'+contact.id);
    let returnValue = this.dialogService.contactDialog(contact);
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactService.saveContact(result)
        .catch(error => this.router.navigate(['login']))
        .subscribe(result => this.getContacts());
    });

  }


  removeContact(contact: Contact) {
    // alert('remove contact #'+contact.id);
    let returnValue = this.dialogService.deleteDialog(contact);
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactService.removeContact(result)
        .catch(error => this.router.navigate(['login']))
        .subscribe(result => this.getContacts());
    });

  }

  showContactOnMap(contact: Contact) {
    // alert('show contact #'+contact.id+' on map');
    let resultValue = this.dialogService.mapDialog(contact);
    resultValue.subscribe();
  }

  addContact() {
    // alert('Maybe I add, maybe not...');
    let returnValue = this.dialogService.contactDialog();
    returnValue.subscribe(result => {
      if (!result) {
        return;
      }
      this.contactService.addContact(result)
        .catch(error => this.router.navigate(['login']))
        .subscribe(result => this.getContacts());
    });
  }
}
