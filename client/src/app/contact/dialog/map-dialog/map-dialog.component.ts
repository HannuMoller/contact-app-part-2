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
  private ApiKey: string = "AIzaSyBMfOAnLqyJjtIMN7ju9mFACvHHeZCowUo";

  constructor(private dialogRef: MdDialogRef<MapDialogComponent>, public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.address = this.contact.streetAddress + ', ' + this.contact.city;
    // this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + this.address + "&zoom=17&key=" + this.ApiKey);
  }

  public ok() {
    this.dialogRef.close();
  }

  mapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("http://www.google.com/maps/embed/v1/place?q=" + this.address + "&zoom=15&key=" + this.ApiKey);
  }

}
