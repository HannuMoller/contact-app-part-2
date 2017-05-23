import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../contact/services/http.service";
import {Headers, RequestOptions, RequestMethod} from "@angular/http";
import { environment } from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authUrl: string = environment.authUrl;
  private loginUrl: string = environment.loginUrl;
  titleText: string = 'Login Page';
  uid: string = '';
  pwd: string = '';

  constructor(private router: Router, private http: HttpService, private app: AppComponent) { }

  ngOnInit() {
//
  }

  public login() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let user = {
      Username: this.uid,
      Password: this.pwd
    };
    let options = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      body: JSON.stringify(user)
    });

    this.http.request(this.authUrl, options)
//      .catch(this.handleError)
//      .map(this.extractData)
      .subscribe(res => {
        let body = res.json();
        let token = body.token;
        if (token) {
          this.http.saveToken(token);
          options.method = RequestMethod.Put;
          this.http.request(this.loginUrl, options)
            .subscribe(res => {
              let user = res.json();
              this.app.name = user.firstName + ' ' + user.lastName;
              this.app.email = user.email;
            });
          this.router.navigate(['contact']);
        } else {
          this.router.navigate(['login']);
        }
      });

    // alert(`user: ${this.uid}, password: ${this.pwd}`);
    //
  }

  private extractData(res: Response|any) {
    try {
      let body = res.json();
      let token = body.token;
      this.http.saveToken(token);
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
      let body:any = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
