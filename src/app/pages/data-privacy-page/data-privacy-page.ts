import { Component } from '@angular/core';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';

@Component({
  selector: 'app-data-privacy-page',
  imports: [
    HeaderSection,
    FooterSection
  ],
  templateUrl: './data-privacy-page.html',
  styleUrl: './data-privacy-page.css',
})
export class DataPrivacyPage {

}
