import { Component, OnInit } from '@angular/core';
// <<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { UserService } from '../user.service'; // Import the Angular service for API calls
// =======
// import { HttpClient } from '@angular/common/http';
// >>>>>>> new-b3

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
// <<<<<<< HEAD
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  serverEndpoint = 'http://localhost:3000/Register';

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
// =======
// export class RegisterComponent {
//   firstName: string = '';
//   lastName: string = '';
//   email: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   address: string = '';
//   phone: string = ''; 

//   constructor(private http: HttpClient) {}

//   register() 
//   {

//     if (this.password !== this.confirmPassword) {
//       alert("Password and Confirm Password do not match.");
//       return;
//     }

//     let bodyData = {
//       firstName: this.firstName,
//       lastName: this.lastName,
//       email: this.email,
//       password: this.password,
//       address: this.address,
//       phone: this.phone
//     };
//     this.http.post("http://localhost:8086/user/create", bodyData, { responseType: 'text' }).subscribe(
//       (resultData: any) => {
//         console.log(resultData);
//         alert("Registered Successfully");

//         this.firstName = '';
//         this.lastName = '';
//         this.email = '';
//         this.password = '';
//         this.confirmPassword = '';
//         this.address = '';
//         this.phone = '';
//       },
//       (error) => {
//         console.error('Error registering user:', error);
//       }
//     );
//   }
// >>>>>>> new-b3
}
