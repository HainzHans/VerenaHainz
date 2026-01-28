import {Component} from '@angular/core';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {GlobalHeroSection, HeroType} from '../../sections/hero-sections/global-hero-section/global-hero-section';
import {ContactSection} from '../../sections/shared-sections/contact-section/contact-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';
import {AboutMeSection} from '../../sections/shared-sections/about-me-section/about-me-section';
import {TextSection} from '../../sections/about-me-sections/text-section/text-section';
import {SliderSection} from '../../sections/about-me-sections/slider-section/slider-section';
import {CheckpointSection} from '../../sections/about-me-sections/checkpoint-section/checkpoint-section';

@Component({
  selector: 'app-about-me-page',
  imports: [
    HeaderSection,
    GlobalHeroSection,
    ContactSection,
    FooterSection,
    AboutMeSection,
    TextSection,
    SliderSection,
    CheckpointSection
  ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css',
})
export class AboutMePage {

  backgroundImage: HeroType = HeroType.aboutMe

  line1 = 'Neugierig,'
  line2 = 'WER HINTER'
  line3 = '„RAUM FÜR´S ECHTE LEBEN"'
  line4 = 'STECKT?'


  aboutMeImageUrl = 'assets/images/profile/profil2.jpg';
  aboutMeSubTitle = 'ich bin Verena,'
  aboutMeSubText = 'deine Einrichtungsexpertin aus dem bayrischen Oberland.'
  aboutMeText = 'Mit viel Leidenschaft und Gespür für Menschen und Räume, ' +
    'verhelfe ich dir zu deinem ganz persönlichen „Raum für´s echte Leben". Auch über die Grenzen des Oberlands hinaus.'
}
