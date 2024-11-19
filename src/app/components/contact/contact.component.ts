import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false; // Tracks the form submission state
  responseMessage: string | null = null; // Stores response messages

  constructor(private http: HttpClient) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior

    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.responseMessage = 'Please fill out all fields before submitting.';
      return;
    }

    this.isSubmitting = true; // Start loading state
    this.responseMessage = null; // Clear any previous messages

    const emailEndpoint = 'http://localhost:3000/send-email'; // Backend endpoint

    this.http.post(emailEndpoint, this.formData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        this.responseMessage = 'Your message has been sent successfully!';
        this.resetForm(); // Clear the form
      },
      (error) => {
        console.error('Error sending email:', error);
        this.responseMessage =
          'Failed to send the message. Please try again later.';
      },
      () => {
        this.isSubmitting = false; // End loading state
      }
    );
  }

  resetForm(): void {
    this.formData = { name: '', email: '', message: '' }; // Clear the form
  }
}
