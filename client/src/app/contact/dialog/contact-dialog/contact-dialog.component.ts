import { Component, OnInit } from '@angular/core';
import {Contact} from "../../contact";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  titleText: string;
  contact: Contact;
  clonedContact : Contact;
  saveText: string;

  constructor(private dialogRef: MdDialogRef<ContactDialogComponent>) {
  }

  ngOnInit() {
    if (this.contact) {
      this.clonedContact = {...this.contact};
      this.titleText = 'Edit Contact';
      this.saveText = 'Save';
    }
    else
    {
      this.clonedContact = new Contact();
      this.titleText = 'Add Contact';
      this.saveText = 'Add';
    }
  }

  public save() {
    this.dialogRef.close(this.clonedContact);
    return;
  }

  public cancel() {
    this.dialogRef.close();
    return;
  }
}
