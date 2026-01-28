import {Component, input} from '@angular/core';
import {NavigateToPageService} from '../../services/navigate-to-page-service';

@Component({
  selector: 'app-navigation-button',
  imports: [],
  templateUrl: './navigation-button.html',
  styleUrl: './navigation-button.css',
  standalone: true,
})
export class NavigationButton {

  buttonTitle = input<string>('');
  navigateTo = input<string>('');

  constructor(private navigateToPageService: NavigateToPageService) {}

  navigateToPage(page: string) {
    this.navigateToPageService.navigateToPage(page);
  }

}
