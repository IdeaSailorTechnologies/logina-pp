import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }
  firstName: string;
  lastName: string;
  Email: string;
  Mobile: string;

  ngOnInit() {
  }
  signIn(): void {
      this.router.navigate(["login"]);
  }

}
