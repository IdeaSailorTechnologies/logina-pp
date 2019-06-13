import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
import { Login } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
customer: Login[];
// emailAddress: string;
// Password: string;
 userdata: any;
  public username: any;
  password: any;

// tslint:disable-next-line: no-shadowed-variable
  constructor(private LoginService: LoginService, private router: Router) {
    this.username = '';
    this.password = '';
   }



  ngOnInit() {


  }
 login() {
  const data = {
    emailAddress: this.username, password : this.password
  };
  console.log(data);
  this.LoginService.login(data).subscribe(response => {
    this.userdata = response;
    this.router.navigate(['sidebar']);
    console.log('this.userdata :' + JSON.stringify(this.userdata));

    });
 }

}

