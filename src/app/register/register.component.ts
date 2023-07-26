import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = '';
  phone: string = ''; 

  constructor(private http: HttpClient) {}

  register() 
  {

    if (this.password !== this.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    let bodyData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      address: this.address,
      phone: this.phone
    };
    this.http.post("http://localhost:8086/user/create", bodyData, { responseType: 'text' }).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert("Registered Successfully");

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.address = '';
        this.phone = '';
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
