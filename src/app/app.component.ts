import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GSR IT Solutions';

  // Function to handle form submission
  sendEmail(e: Event) {
    e.preventDefault(); // Prevent default form submission
    
    // Extracting values from the form using bracket notation
    const form = e.target as HTMLFormElement;
    const name = (form as any)['user_name'].value;
    const contact = (form as any)['user_contact'].value;
    const email = (form as any)['user_email'].value;
    const message = (form as any)['message'].value;

    // Construct the email content
    const emailContent = `
      Name: ${name}\n
      Contact Number: ${contact}\n
      Email: ${email}\n
      Message: ${message}
    `;

    // Sending email with all fields
    emailjs.send('service_triiasq', 'template_73livg4', {
      user_name: name,
      user_contact: contact,
      user_email: email,
      message: emailContent
    }, '2DiFzCcfasd6fK0oI')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert("Message sent successfully!.Our Team will contact very shortly..");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again later.");
    });
  }
}
