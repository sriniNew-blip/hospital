import { Component, ElementRef, ViewChild } from '@angular/core';
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

 loading = true;
  @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;

  // ngAfterViewInit() {
  //   // Fallback method: wait for iframe to load completely
  //   const iframe = this.iframeRef.nativeElement;

  //   // Try load event first
  //   iframe.onload = () => {
  //     this.hideLoader();
  //   };

  //   // Fallback if load event not triggered (Google iframe case)
  //   setTimeout(() => {
  //     this.hideLoader();
  //   }, 4000); // Force hide after 4s even if not triggered
  // }

  // hideLoader() {
  //   if (this.loading) {
  //     this.loading = false;
  //   }
  // }
}
