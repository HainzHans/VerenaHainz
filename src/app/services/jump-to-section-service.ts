import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JumpToSectionService {

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    const currentUrl = this.router.url;

    // Wenn wir NICHT auf der Startseite sind → zuerst navigieren
    if (currentUrl !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollTo(sectionId);
        }, 50);
      });
    } else {
      // Wenn wir schon auf der Startseite sind → direkt scrollen
      this.scrollTo(sectionId);
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

}
