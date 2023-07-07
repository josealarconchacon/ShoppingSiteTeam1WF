import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // initialize variable to equal new FormGroup
    this.registerForm = new FormGroup({
      username: new FormGroup('', [Validators.required]),
      password: new FormGroup('', [Validators.required]),
    });
  }

  onSubmit() {}
}
