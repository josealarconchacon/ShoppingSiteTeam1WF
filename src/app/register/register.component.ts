import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { UserService } from '../user.service'; // Import the Angular service for API calls

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  serverEndpoint = 'http://localhost:3000/Register'; // Replace with your server's actual API endpoint URL

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      this.userService.registerUser(formData).subscribe(
        (response) => {
          console.log('Form submission successful:', response);
          // Handle success, e.g., show a success message or navigate to a different page
        },
        (error: HttpErrorResponse) => {
          console.error('Form submission error:', error);
          if (error.status === 409) {
            // Handle the case when the username already exists
            console.error('Username already exists:', error.message);
            // Show an error message to the user
          } else {
            // Handle other errors, e.g., show a generic error message
            console.error('An error occurred during form submission:', error.message);
            // Show a generic error message to the user
          }
        }
      );
    } else {
      // Handle invalid form submission, e.g., show error messages
    }
  }
}
