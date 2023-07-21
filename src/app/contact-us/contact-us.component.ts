import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
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

      emailjs.init('kDk9NYqTL9XOiPCnZ');
      let response = await emailjs.send("service_flafm2c","template_s1zi1c9",{
         from_name: this.form.value.from_name,
         to_name: this.form.value.to_name,
         email_id: this.form.value.email_id,
         phone: this.form.value.phone,
         message: this.form.value.message,
         });

      // Make a POST request to the backend API for contact form submission
      this.http.post('http://localhost:3000/contact', formData).subscribe(
        (response) => {
          console.log('Message sent successfully:', response);
          // Handle successful submission, e.g., show a success message or clear the form
          alert('Message has been sent');
          this.form.reset();
        },
        (error) => {
        console.error('Failed to send the message:');
          // Handle submission error, e.g., show an error message to the user
          alert('Failed to send the message');
        }
      );
    }
  }
}
