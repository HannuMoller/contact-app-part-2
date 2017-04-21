import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titleText: string = 'Login Page';
  uid: string = '';
  pwd: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // alert(`user: ${this.uid}, password: ${this.pwd}`);
    this.router.navigate(['contact']);
  }
}
