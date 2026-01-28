import { Component } from '@angular/core';
import {ProjectDisplaySection} from '../../sections/project-sections/project-display-section/project-display-section';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {ContactSection} from '../../sections/shared-sections/contact-section/contact-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';
import {GlobalHeroSection, HeroType} from '../../sections/hero-sections/global-hero-section/global-hero-section';

@Component({
  selector: 'app-project-page',
  imports: [
    ProjectDisplaySection,
    HeaderSection,
    ContactSection,
    FooterSection,
    GlobalHeroSection
  ],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {

  backgroundImage: HeroType = HeroType.project

  line1 = 'Projekte,'
  line2 = 'LASS DICH INSPIRIEREN &'
  line3 = 'ENTDECKE WAS MÖGLICH IST.'

  projectDisplays: ProjectDisplay[] = [
    {
      beforeImage: '/assets/images/projects/bergler/after_bergler.png',
      afterImage: '/assets/images/projects/bergler/vorher_bergler_beedrom.jpg',
      firstSmallImage: '/assets/images/projects/bergler/model_bergler_1.jpg',
      secondSmallImage: '/assets/images/projects/bergler/model_bergler_2.jpg',
      title: 'SCHLAFZIMMER FÜR BERGLER',
      text: 'Hier wollte ein Ehepaar nach 30 Jahren endlich ein neues Schlafzimmer. Natürlich und gemütlich waren die Hauptwünsche ' +
        'und außerdem sollte der alte, selbst restaurierte Bauernschrank bleiben. Mit viel Holz, natürlichen Grüntönen und einer großen Leinwand ' +
        'mit einem selbst geknipsten Bergpanorama als Motiv, zieht eine entspannte Gemütlichkeit in den Raum ein.',
      layout: 'left',
      background: 'white'
    },
    {
      beforeImage: '/assets/images/projects/wohnzimmer/before_wohnzimmer.png',
      afterImage: '/assets/images/projects/wohnzimmer/after_wohnzimmer.jpg',
      firstSmallImage: '/assets/images/projects/wohnzimmer/model_wohnzimmer_1.jpg',
      secondSmallImage: '/assets/images/projects/wohnzimmer/model_wohnzimmer_2.jpg',
      title: 'WOHNZIMMER FÜR SAMMLER',
      text: 'Der Arbeitsplatz sollte harmonisch ins Wohnzimmer integriert werden - weg aus dem Durchgang. Sofa, Teppich und persönliche Gegenstände ' +
        'durften bleiben, der Rest war offen. Gewünscht war ein Wohlfühlraum, in dem die Plattensammlung inklusive Plattenspieler in den Mittelpunkt ' +
        'rückt und durchdachter Stauraum entsteht.',
      layout: 'right',
      background: '#efebe0'
    },
    {
      beforeImage: '/assets/images/projects/schlafzimmer/after_schlafzimmer.png',
      afterImage: '/assets/images/projects/schlafzimmer/before_schlafzimmer.jpg',
      firstSmallImage: '/assets/images/projects/schlafzimmer/model_schlafzimmer_1.jpg',
      secondSmallImage: '/assets/images/projects/schlafzimmer/model_schlafzimmer_2.jpg',
      title: 'COOLES JUGENDZIMMER',
      text: 'Frisch umgezogen wollte diese Familie ihrem Sohn endlich ein richtiges Jugendzimmer gönnen. ' +
        'Die Schrankeinbauten sollten bleiben. Der Wunsch der Eltern: „genügend Stauraum“. ' +
        'Der Wunsch des Jungen: „ein cooles, erwachsenes Zimmer“. ' +
        'Die Lieblingsfarbe Blau sowie die Hobbys Skaten, mit Freunden „abhängen“ und ' +
        'Computerspielen sollten berücksichtigt werden.',
      layout: 'left',
      background: 'white'
    },
  ];

}

export interface ProjectDisplay {
  beforeImage: string;
  afterImage: string;
  firstSmallImage: string;
  secondSmallImage: string;
  title: string;
  text: string;
  layout: 'left' | 'right';
  background: string;
}
