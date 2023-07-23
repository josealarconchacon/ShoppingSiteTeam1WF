import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    // Handle the error and return a user-friendly message
    let errorMessage = 'An error occurred.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  submitContactForm(formData: any): Observable<any> {
    return this.http.post(this.url + 'Register', formData).pipe(
      catchError(this.handleError)
    );
  }


  registerUser(register: any): Observable<any> {
    return this.http.post(this.url + 'register', register).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(login: any): Observable<any> {
    return this.http.post(this.url + 'login', login).pipe(
      catchError(this.handleError)
    );
  }
  ContactService(formData: any): Observable<any> {
    return this.http.post(this.url, formData);
  }
}
