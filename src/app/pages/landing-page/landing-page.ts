import { Component } from '@angular/core';
import {HeroSectionLanding} from '../../sections/hero-sections/hero-section-landing/hero-section-landing';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {PainPointsSection} from '../../sections/landing-sections/pain-points-section/pain-points-section';
import {AboutMeSection} from '../../sections/shared-sections/about-me-section/about-me-section';
import {ProjectsSection} from '../../sections/landing-sections/projects-section/projects-section';
import {CustomerRefSection} from '../../sections/landing-sections/customer-ref-section/customer-ref-section';
import {ServiceSection} from '../../sections/landing-sections/service-section/service-section';
import {ContactSection} from '../../sections/shared-sections/contact-section/contact-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroSectionLanding,
    HeaderSection,
    PainPointsSection,
    AboutMeSection,
    ProjectsSection,
    CustomerRefSection,
    ServiceSection,
    ContactSection,
    FooterSection
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  heroImageUrl = 'assets/images/hero/landing_hero.jpg';

  // AboutMe Section
  aboutMeImageUrl = 'assets/images/profile/profil1.jpg';
  aboutMeSubTitle = 'schön, dass du da bist!'
  aboutMeSubText = 'Du suchst eine Einrichtungsberatung mit Herz und einem Gespür für „Raum für´s echte Leben"?\n' +
    'Dann bist du hier goldrichtig!'
  aboutMeText = 'Ich bin Verena, Naturliebhaberin, kreativer Kopf und permanent dabei, meine vier Wände immer noch ein bisschen besser zu machen – so, dass sie perfekt für mich und mein Leben funktionieren.\n' +
    '\n' +
    'Ich helfe dir, das Gleiche zu tun. Gemeinsam schaffen wir dein Zuhause voller Persönlichkeit, funktional und schön, mit ganz viel Platz für´s echte Leben – und allem, was dazugehört.'
}
