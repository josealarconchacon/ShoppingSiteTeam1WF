import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public fb: FormBuilder, private service: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private http: HttpClient // Inject HttpClient
  // ) {}

  ngOnInit(): void {}
  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });
  // }


  onSubmit() {
    if (this.loginForm.valid) {
      this.service.AddloginUser(this.loginForm.value).subscribe(
        (response) => {
          alert('Login successful');
          console.log(response);
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login error, e.g., show an error message to the user
        }
      );
    }
  }
  
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const loginData = this.loginForm.value;

  //     // Make a POST request to the backend API for login
  //     this.http.post('http://localhost:3000/api/login', loginData).subscribe(
  //       (response) => {
  //         console.log('Login successful:', response);
  //         // Handle successful login, e.g., store JWT token and navigate to a protected page
  //       },
  //       (error) => {
  //         console.error('Login failed:', error);
  //         // Handle login error, e.g., show an error message to the user
  //       }
  //     );
  //   }
  // }


}
