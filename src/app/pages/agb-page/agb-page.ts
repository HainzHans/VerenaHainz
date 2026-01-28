import { Component } from '@angular/core';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';

@Component({
  selector: 'app-agb-page',
  imports: [
    HeaderSection,
    FooterSection
  ],
  templateUrl: './agb-page.html',
  styleUrl: './agb-page.css',
})
export class AgbPage {

}
