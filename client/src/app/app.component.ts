import { Component, Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Listener} from "./util/listener";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  title = 'Contact App, Angular 4 version';

  sidenavMode = 'side';

  constructor(private router: Router) {
  }

  logout() {
    // alert(`user: ${this.uid}, password: ${this.pwd}`);
    this.router.navigate(['login']);
  }

  addContact() {
    if (Listener.getComponent()) {
      Listener.getComponent().addContact();
    }
    else
    {
      alert('Login first!');
    }
  }

}
