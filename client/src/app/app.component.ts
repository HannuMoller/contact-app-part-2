import {Component, HostListener, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "./contact/services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  title = 'Contact App, Angular 4 version';

  sidenavMode = 'side';

  public email: string;
  public name: string;

  constructor(private router: Router, private http: HttpService) {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  logout() {
    this.email = '';
    this.name = '';
    // actively forget token
    this.http.saveToken('');
    this.router.navigate(['login']);
  }

}
