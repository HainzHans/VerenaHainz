import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateToPageService {

  constructor(private router: Router) {}

  navigateToPage(page: string) {
    this.router.navigate([page]).then(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
}
