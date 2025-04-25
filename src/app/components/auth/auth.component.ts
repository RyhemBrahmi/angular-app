import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true, 
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule] 
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) {}

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    onSubmit(): void {
      if (this.loginForm.valid) {
        console.log('Form Submitted!', this.loginForm.value);
  
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
  
        this.loginService.login(email, password).subscribe({
          next: (response) => {
            console.log('Authentication successful', response);
            this.router.navigate(['/course']);
          },
          error: (error) => {
            console.error('Error during authentication', error);
          }
        });
      } else {
        console.log('Form is not valid');
      }
    }
}
