import { Component } from '@angular/core';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';

@Component({
  selector: 'app-impressum-page',
  imports: [
    HeaderSection,
    FooterSection
  ],
  templateUrl: './impressum-page.html',
  styleUrl: './impressum-page.css',
})
export class ImpressumPage {

}
