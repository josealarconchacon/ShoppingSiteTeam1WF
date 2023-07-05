import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // set variable type FormGroup
  loginForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // initialize variable to equal new FormGroup
    this.loginForm = new FormGroup({
      username: new FormGroup('', [Validators.required]),
      password: new FormGroup('', [Validators.required]),
    });
  }

  onSubmit() {}
}
