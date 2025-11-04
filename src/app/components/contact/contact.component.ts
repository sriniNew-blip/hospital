import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 submitMessage = '';

  ngAfterViewInit() {
    // Get references to form and hidden iframe
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const iframe = document.getElementsByName('hidden_iframe')[0] as HTMLIFrameElement;

    // Set iframe onload to detect when form is submitted
    iframe.onload = () => {
      this.submitMessage = 'Form submitted successfully!';
      form.reset();
    };
  }

}
