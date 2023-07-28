import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    let loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post("http://localhost:8086/user/login", loginData).subscribe(
      (response: any) => {
        // Successful login, response might contain user information or just a success message
        console.log(response);
        localStorage.setItem('userEmail', this.email);
        alert("Login Successful");

        this.router.navigate(['/user-page']);
      },
      (error) => {
        console.error('Error logging in:', error);
        alert("Login Failed");
      }
    );
  }
}
