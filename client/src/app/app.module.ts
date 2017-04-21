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
import { ContactDialogComponent } from './contact/dialog/contact-dialog/contact-dialog.component';
import { DialogService } from "./contact/services/dialog.service";
import { MapDialogComponent } from './contact/dialog/map-dialog/map-dialog.component';
import { DeleteDialogComponent } from './contact/dialog/delete-dialog/delete-dialog.component';
import {ContactHttpService} from "./contact/services/contact-http.service";
import {ContactLocalStorageService} from "./contact/services/contact-local-storage.service";
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import {ContactService} from "./contact/services/contact.service";

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    DeleteDialogComponent,
    ContactAddressPipe,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [ContactDialogComponent,
                    MapDialogComponent,
                    DeleteDialogComponent],
  providers: [ContactService,
              ContactComponent,
              ContactLocalStorageService,
              ContactHttpService,
              DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
