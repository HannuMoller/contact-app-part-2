export class Contact {

  /*
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _phone: string;
  private _streetAddress: string;
  private _city: string;
*/
  public id: number;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public streetAddress: string;
  public city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.streetAddress = streetAddress;
    this.city = city;
  }

/*
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get streetAddress(): string {
    return this._streetAddress;
  }

  set streetAddress(value: string) {
    this._streetAddress = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  */
}
