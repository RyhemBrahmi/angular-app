import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthResponse {
  status: string;
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://preprod.api.clevory.com/web/session/authenticate';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const params = {
      db: 'TEST',
      login: email,
      password: password
    };

    return this.http.post<AuthResponse>(this.apiUrl, { params });
  }
}
