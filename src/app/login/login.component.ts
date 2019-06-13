import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private formBuilder: FormBuilder) { }
  username: any;
  password: any;
  registerForm: FormGroup;
    submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
  });
  }
  get f() { return this.registerForm.controls; }
  login(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['sidebar']);
    } else {
      alert('Invalid credentials');
    }
  }
  }
}

