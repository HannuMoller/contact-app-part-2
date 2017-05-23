import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {Http, Response, Headers, RequestOptions, RequestMethod} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ContactStorage} from "./contact-storage";
import { environment } from "../../../environments/environment";
import {HttpService} from "./http.service";

@Injectable()
export class ContactHttpService implements ContactStorage {

  private serverUrl: string = environment.serverUrl;

  constructor(private http: HttpService) {
  }

  public findContacts() {
    return this.http.get(this.serverUrl)
      .map(resp => this.downshift(resp))
//      .catch(error => this.handleError(error))
      ;
  }

  downshift(resp: Response): Contact[]|any {
    if (resp.status != 200) {
      return resp;
    } else {
      var contacts = resp.json();
      let i = contacts.length;
      var contact;
      while (i > 0) {
        i--;
        contact = contacts[i];
        for (var key in contact) {
          if (contact.hasOwnProperty(key)) {
            let value = contact[key];
            delete contact[key];
            contact[this.lowerize(key)] = value;
          }
        }
      }
      return contacts;
    }
  }

  private lowerize(s) {
    return s[0].toLowerCase() + s.slice(1);
  }

  private extractData(res: Response) {
    try {
      let body = res.json();
      let ret = body.data || body || {};
      console.log('data = ' + ret);
      return ret;
    } catch (e) {
      console.log(e.toString());
      return e.toString();
    }
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public saveContact(contact: Contact) { // PUT
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      method: RequestMethod.Put,
      headers: headers,
      body: JSON.stringify(contact)
    });

    return this.http.request(this.serverUrl+contact.id, options)
      .map(this.extractData)
//      .catch(this.handleError)
      ;
  }

  public removeContact(contact: Contact) { // DELETE
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      method: RequestMethod.Delete,
      headers: headers
    });

    return this.http.request(this.serverUrl+contact.id, options)
      .map(this.extractData)
//      .catch(this.handleError)
      ;
  }

  public addContact(contact: Contact) { // POST
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      body: JSON.stringify(contact)
    });

    return this.http.request(this.serverUrl, options)
      .map(this.extractData)
//      .catch(this.handleError)
      ;
  }

}
