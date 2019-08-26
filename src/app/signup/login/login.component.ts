import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder, private route: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    if (this.authenticationService.isLoggednIn()) {

      this.route.navigate(["/dashboard"]);
    }
      this.createFrom();
  }

  createFrom() {
    this.login = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }

  onClickLogin() {
 
    if (this.login.get('email').value == "naptel@argusoft.in" &&
      this.login.get('password').value == "abc") {
      this.authenticationService.sendToken("HIIII")
      this.route.navigate(["/dashboard"]);
    }else{
      
    }
  }

}
