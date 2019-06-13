import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Customer} from './customer';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

// tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  addCustomer(data) {
// tslint:disable-next-line: deprecation
    const headers = new Headers();
    headers.append('Contact-Type', 'application-json');
    return this.http.post('http://localhost:2019/customers/signup', data,  '{ headers:headers }')
    .pipe(map(res => res.json()));
  }
}
