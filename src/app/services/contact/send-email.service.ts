import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SendEmailResponse {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private apiUrl = 'https://preprod.api.clevory.com/clevorytraining/emailsend';

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, phone: string, entreprise: string, formation: string): Observable<SendEmailResponse> {
    const body = {
      params: {
        name,
        email,
        phone,
        entreprise,
        formation
      }
    };
    return this.http.post<SendEmailResponse>(this.apiUrl, body);
  }
}
