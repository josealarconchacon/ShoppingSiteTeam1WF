import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  AddRegisterUser(register: any): Observable<any> {
    return this.http.post(this.url + 'register', register);
  }

  AddloginUser(login: any): Observable<any> {
    return this.http.post(this.url + 'longin', login);
  }
  
}
