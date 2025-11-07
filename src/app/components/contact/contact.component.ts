import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 loading = true;
  screenURL: any;
  screen: any;
   private iframeLoadFallback: any;

constructor(private sanitizer: DomSanitizer){

}
  ngOnInit() {
    this.loading=true;
    const url = 'https://script.google.com/macros/s/AKfycbyeDN8brUJIJUeEPe85gnlUTVOH6eIe1yr-OoEfeW5LFyr4RwgTATwAKrus1kA-P2sx/exec';
    this.screen = this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }

  onLoaded(event: any) {
    console.log('Iframe loaded ✅', event);
    this.loading = false;
    clearTimeout(this.iframeLoadFallback);
  }
}
