import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {

  constructor(private router: Router) {
  }

  navigateToImpressumPage() {
    this.router.navigate(['/impressum']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToAgbPage() {
    this.router.navigate(['/agb']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  navigateToDataPrivacyPage() {
    this.router.navigate(['/data-privacy']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}
