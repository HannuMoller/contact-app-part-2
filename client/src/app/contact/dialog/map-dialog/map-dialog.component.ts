import { Component, OnInit } from '@angular/core';
import {Contact} from "../../contact";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  contact: Contact;
  address: string;

  constructor(private dialogRef: MdDialogRef<MapDialogComponent>, public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.address = this.contact.streetAddress + ', ' + this.contact.city;
  }

  public ok() {
    this.dialogRef.close();
  }

  mapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + this.address + "&output=embed");
  }

}
