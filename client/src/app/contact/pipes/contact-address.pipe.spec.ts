/**
 * Created by ekoodi on 08/05/2017.
 */
import {ContactAddressPipe} from "./contact-address.pipe";
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {

  let pipe = new ContactAddressPipe();

  it('should return streetAddress and city', () => {
    let contact = new Contact(1, 'Aku','Ankka','040-1234567','Kauppakatu 65','Lappeenranta');
    expect(pipe.transform(contact)).toBe(contact.streetAddress + ', ' + contact.city);
  });

  it('should return streetAddress', () => {
    let contact = new Contact(1, 'Aku','Ankka','040-1234567','Kauppakatu 65','');
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('should return city', () => {
    let contact = new Contact(1, 'Aku','Ankka','040-1234567','','Lappeenranta');
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.streetAddress = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact(1, 'Aku','Ankka','040-1234567','','');
    expect(pipe.transform(contact)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });

});
