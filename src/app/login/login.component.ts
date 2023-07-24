import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
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
          // Handle successful login, e.g., store JWT token and navigate to a protected page
          this.router.navigate(['/home']);  // Navigate to home page
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login error, e.g., show an error message to the user
        }
      );
    }
  }
}
