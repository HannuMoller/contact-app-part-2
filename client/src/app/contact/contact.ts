export class Contact {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _phone: string;
  private _streetAddress: string;
  private _city: string;


  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._streetAddress = streetAddress;
    this._city = city;
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get phone(): string {
    return this._phone;
  }

  get streetAddress(): string {
    return this._streetAddress;
  }

  get city(): string {
    return this._city;
  }
}
