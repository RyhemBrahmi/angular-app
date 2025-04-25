import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { SendEmailService } from '../../services/contact/send-email.service';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [
     CommonModule,
     ReactiveFormsModule,
     MatFormFieldModule,
     MatInputModule, 
     MatButtonModule ], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private sendEmailService: SendEmailService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      entreprise: ['', Validators.required],
      formation: ['', Validators.required]
    });
    
  }

      onSubmit(): void {
        if (this.contactForm.valid) {
          const { firstName, lastName, email, phone, entreprise, formation } = this.contactForm.value;
          const fullName = `${firstName} ${lastName}`;
      
          this.sendEmailService.sendEmail(fullName, email, phone, entreprise, formation).subscribe({
            next: (response) => {
              console.log('Email envoyé avec succès :', response);
            },
            error: (error) => {
              console.error('Erreur lors de l\'envoi de l\'email :', error);
            }
          });
        } else {
          console.log('Le formulaire n\'est pas valide');
        }
      }
      
  
}
