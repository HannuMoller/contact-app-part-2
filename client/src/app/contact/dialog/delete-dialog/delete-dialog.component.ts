import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Contact} from "../../contact";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  titleText: string = 'Delete Contact';
  contact: Contact;

  constructor(private dialogRef: MdDialogRef<DeleteDialogComponent>) {

  }

  ngOnInit() {
  }

  public delete() {
    this.dialogRef.close(this.contact);
    return;
  }

  public cancel() {
    this.dialogRef.close();
  }
}
