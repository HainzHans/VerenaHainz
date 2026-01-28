import { Component } from '@angular/core';
import {JumpToSectionService} from '../../services/jump-to-section-service';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButton {

  constructor(private jumpToSectionService: JumpToSectionService) {
  }

  scrollToSection(section: string) {
    this.jumpToSectionService.scrollToSection(section);
  }

}
