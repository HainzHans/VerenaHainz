import { Component } from '@angular/core';
import {MailService} from '../../../services/mail-service';
import {FormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-contact-section',
  imports: [
    FormsModule,
    MatCheckbox
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {

  agbAccepted = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendSuccess = false;
  sendFailure = false;

  constructor(private emailService: MailService) {
  }

  submitForm() {

    this.emailService.sendEmail(this.formData).subscribe({
      next: () => {
        this.sendSuccess = true;
        this.formData = { name: '', email: '', message: '' };
      },
      error: () => {
        this.sendFailure = true;
      }
    });
  }



}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
