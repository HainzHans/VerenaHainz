import { Component } from '@angular/core';
import {NavigateToPageService} from '../../../services/navigate-to-page-service';

@Component({
  selector: 'app-service-section',
  imports: [],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {

  constructor(private navigateToPageService: NavigateToPageService) {}

  navigateToPage(page: string) {
    this.navigateToPageService.navigateToPage(page);
  }

}
