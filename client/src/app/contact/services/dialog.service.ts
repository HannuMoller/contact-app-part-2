import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {MdDialog} from "@angular/material";
import {ContactDialogComponent} from "../dialog/contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../dialog/map-dialog/map-dialog.component";
import {DeleteDialogComponent} from "../dialog/delete-dialog/delete-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) {

  }

  public contactDialog(contact?: Contact) {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public mapDialog(address: string, city: string) {
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address+','+city;
    return dialogRef.afterClosed();
  }

  public deleteDialog(contact?: Contact) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

}
