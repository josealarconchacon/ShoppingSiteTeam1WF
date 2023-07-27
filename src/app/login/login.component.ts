// <<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { UserService } from '../user.service';
// =======
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// >>>>>>> new-b3

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// <<<<<<< HEAD
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public fb: FormBuilder, private service: UserService, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      // Make a POST request to the backend API for login
      this.http.post('http://localhost:3000/Login', loginData).subscribe(
        (response) => {
          alert('Login successful');
          console.log(response);
          this.router.navigate(['/user-page'])
          // Handle successful login, e.g., store JWT token and navigate to a protected page
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login error, e.g., show an error message to the user
        }
      );
    }
  }
}
// =======
// export class LoginComponent {
//   email: string = '';
//   password: string = '';

//   constructor(private http: HttpClient, private router: Router) {}

//   login() {
//     let loginData = {
//       email: this.email,
//       password: this.password
//     };

//     this.http.post("http://localhost:8086/user/login", loginData).subscribe(
//       (response: any) => {
//         // Successful login, response might contain user information or just a success message
//         console.log(response);
//         localStorage.setItem('userEmail', this.email);
//         alert("Login Successful");

//         this.router.navigate(['/user-page']);
//       },
//       (error) => {
//         console.error('Error logging in:', error);
//         alert("Login Failed");
//       }
//     );
//   }
// }
// >>>>>>> new-b3
