import {ContactComponent} from "../contact/contact.component";
export class Listener {

  private static component;

  public static setComponent(component) {
    this.component = component;
  }

  public static getComponent() {
    return this.component;
  }
}
