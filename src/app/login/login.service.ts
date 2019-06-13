import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Login} from './login';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

// tslint:disable-next-line: deprecation
  constructor(private http: Http) { }
login(data) {
// tslint:disable-next-line: deprecation
  const headers = new Headers();
  headers.append('Contact-Type', 'application-json');
  return this.http.post('http://localhost:2019/customers/login', data, '{headers:headers}')
  .pipe(map(res => res.json()));
}
}
