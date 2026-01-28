import { Component } from '@angular/core';
import {JumpToSectionService} from '../../../services/jump-to-section-service';
import {PrimaryButton} from '../../../components/primary-button/primary-button';

@Component({
  selector: 'app-header-section',
  imports: [
    PrimaryButton
  ],
  templateUrl: './header-section.html',
  styleUrl: './header-section.css',
})
export class HeaderSection {

  isMenuOpen = false;

  constructor(private jumpToSectionService: JumpToSectionService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(section: string) {
    this.jumpToSectionService.scrollToSection(section);
    this.isMenuOpen = false;
  }

}
