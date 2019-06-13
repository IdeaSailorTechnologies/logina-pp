import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [CustomerService]
})
export class RegistrationComponent implements OnInit {
 customer: Customer[];
 public firstName: any;
 LastName: any;
 Email: any;
 Password: any;
 Mobile: any;
 userdata: any;


// tslint:disable-next-line: no-shadowed-variable
  constructor(private CustomerService: CustomerService) {

  this.firstName = '';
    this.LastName = '';
    this.Email = '';
   this.Password = '';
    this.Mobile ='';
  }

  ngOnInit() {

  }

  signIn() {
    // this.CustomerService.addCustomer(newCustomer)
    // .subscribe(Customer);
    var data = {
      companyName: this.firstName, emailAddress: this.Email, lastName : this.LastName, password : this.Password, mobile: this.Mobile
    };
    console.log(data);
    this.CustomerService.addCustomer(data).subscribe(response => {
      this.userdata = response;
      console.log('this.userdata :' + JSON.stringify(this.userdata));

      });
  }


}
