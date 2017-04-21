import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import * as _ from 'lodash';

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    let addressParts = [ contact.streetAddress || null, contact.city || null ];

    let addr = _.compact(addressParts).join(', ');
    return addr;
  }

}
