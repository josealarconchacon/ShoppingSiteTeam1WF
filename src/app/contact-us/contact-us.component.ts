import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import emailjs from '@emailjs/browser';
import { UserService } from '../user.service'; // Import the Angular service for API calls

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient, // Inject the HttpClient module
    private userService: UserService // Inject the Angular service for API calls
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async sendEmail() {
    if (this.form.valid) {
      const formData = this.form.value;
  
      try {
        // Initialize EmailJS with your EmailJS service ID
        emailjs.init('kDk9NYqTL9XOiPCnZ');
  
        // Send the email using EmailJS
        const emailResponse = await emailjs.send(
          'service_flafm2c',
          'template_s1zi1c9',
          {
            from_name: formData.from_name,
            email_id: formData.email_id,
            phone: formData.phone,
            message: formData.message,
          }
        );
  
        // Log EmailJS response
        console.log('EmailJS response:', emailResponse);
  
        try {
          // Make a POST request to the backend API for contact form submission
          const backendResponse = await this.httpClient.post<any>('http://localhost:3000/ContactUs', formData).toPromise();
          console.log('Backend response:', backendResponse);
  
          // Handle successful submission, e.g., show a success message or clear the form
          alert('Message has been sent');
          this.form.reset();
        } catch (backendError) {
          console.error('Failed to send the message to backend:', backendError);
          // Handle backend submission error, e.g., show an error message to the user
          alert('Failed to send the message to backend');
        }
      } catch (emailError) {
        console.error('Failed to send the email using EmailJS:', emailError);
        // Handle EmailJS send error, e.g., show an error message to the user
        alert('Failed to send the email using EmailJS');
      }
    }
  }
}
