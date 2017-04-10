import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item/contact-list-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ContactService } from "./contact/services/contact.service";
import { ContactDialogComponent } from './contact/dialog/contact-dialog/contact-dialog.component';
import { DialogService } from "./contact/services/dialog.service";
import { MapDialogComponent } from './contact/dialog/map-dialog/map-dialog.component';
import { DeleteDialogComponent } from './contact/dialog/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [ContactDialogComponent,
                    MapDialogComponent,
                    DeleteDialogComponent],
  providers: [ContactService,
              DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
