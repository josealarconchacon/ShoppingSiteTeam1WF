import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public fb: FormBuilder, private service: UserService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.service.AddRegisterUser(this.registerForm.value).subscribe(
        (response) => {
          alert('Registration successful');
          console.log(response);
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration error, e.g., show an error message to the user
        }
      );
    }
  }
}
