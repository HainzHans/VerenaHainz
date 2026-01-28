import { Component } from '@angular/core';
import {HeaderSection} from '../../sections/shared-sections/header-section/header-section';
import {ServiceDisplaySection} from '../../sections/service-section/service-display-section/service-display-section';
import {ContactSection} from '../../sections/shared-sections/contact-section/contact-section';
import {FooterSection} from '../../sections/shared-sections/footer-section/footer-section';
import {GlobalHeroSection, HeroType} from '../../sections/hero-sections/global-hero-section/global-hero-section';

@Component({
  selector: 'app-service-page',
  imports: [
    HeaderSection,
    ServiceDisplaySection,
    ContactSection,
    FooterSection,
    GlobalHeroSection
  ],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage {

  backgroundImage: HeroType = HeroType.service

  line1 = 'Leistungen,'
  line2 = 'SO ARBEITEN WIR ZUSAMMEN'
  line3 = 'AN DEINEM „RAUM FÜR´S ECHTE'
  line4 = 'LEBEN"'


  quickFixImage = 'assets/project/testOne/bedroom_test_model_2.jpg';
  quickFixIntro = 'Du bekommst schnell und einfach Experten-Tipps rund um das Thema Einrichten - abgestimmt auf dich, ' +
    'deine Wünsche und Bedürfnisse sowie die Funktion des Raumes.';
  quickFixTitle = 'DER „QUICK FIX"';
  quickFixPanels = [
    {
      id: 1,
      title: 'ÜBERMITTLUNG VON FOTOS',
      content:
        'Du schickst mir Fotos von einem „Problemraum" und erzählst mir kurz, was dich stört.\n' +
        'Auf dieser Basis mache ich mir bereits ein paar Gedanken, bevor wir uns zu einem Zoom-Call verabreden und alles „vor Ort" besprechen.'
    },
    {
      id: 2,
      title: 'EXPERTEN GESPRÄCH',
      content:
        'Wir verabreden uns zu einem Zoom-Call (ca. 1,5 Stunden).\n' +
        'Jetzt haben wir Zeit, um deine Anliegen sowie erste Ideen meinerseits ausführlich zu besprechen.\n' +
        'Zusammen legen wir fest, welche Änderungen möglich und sinnvoll sind.'
    },
    {
      id: 3,
      title: 'ÜBERGABE HANDOUT',
      content:
        'Nur das Beste für dich.\n' +
        'Du bekommst eine Zusammenfassung unseres Gesprächs mit vielen allgemeinen Tipps ' +
        'sowie meine konkreten Empfehlungen für die Umgestaltung deines Raumes.'
    }
  ];


  makeOverImage = 'assets/project/testOne/bedroom_test_model_3.jpg';
  makeOverIntro = 'Umgezogen oder einfach den Wusch nach etwas neuem? Mit meinem MAKEOVER bekommst du ein ganzheitliches Einrichtungskonzept inkl. Farberatung, ' +
    'Kaufliste und Umsetzungsleitfaden. Geplant nach deinen Wünschen und Bedürfnissen.';
  makeOverTitle = 'DAS „MAKEOVER"';
  makeOverPanels = [
    {
      id: 1,
      title: 'ÜBERMITTLUNG VON FOTOS',
      content:
        'Du füllst den bereitgestellten Fragebogen aus und schickst mir diesen zusammen mit Fotos von deinem „Problemraum" zu.\n' +
        'Auf dieser Basis mache ich mir bereits ein paar Gedanken, bevor wir uns zu einem Zoom-Call verabreden und alles „vor Ort" besprechen.'
    },
    {
      id: 2,
      title: 'EXPERTEN GESPRÄCH',
      content:
        'Wir verabreden uns zu einem Zoom-Call (ca. 1,5 Stunden).\n' +
        'Jetzt haben wir Zeit, um die Punkte aus deinem Fragebogen sowie die ersten Ideen meinerseits ausführlich zu besprechen.\n' +
        'Zusammen legen wir fest, welche Änderungen möglich und sinnvoll sind.'
    },
    {
      id: 3,
      title: 'MOODBOARD',
      content:
        'Du erhältst einen ersten Eindruck.\n' +
        'Auf Basis deiner Angaben erstelle ich ein Moodboard inklusive Farbkonzept. So bekommst du ein Gefühl dafür, wie sich der Raum zusammenfügt.\n' +
        'Dies besprechen wir in einem weiteren Zoom-Call.'
    },
    {
      id: 4,
      title: 'OPTIMIERUNGEN',
      content:
        'Wir verabreden uns zu einem weiteren Zoom-Call (ca. 1,5 Stunden).\n' +
        'Wir besprechen das Moodboard und klären Fragen. Hier hast du auch die Möglichkeit, Änderungswünsche zu kommunizieren.\n' +
        'Wir legen das Moodboard final fest.'
    },
    {
      id: 5,
      title: 'ENDERGEBNIS',
      content:
        'Erarbeitung und Bereitstellung des ganzheitlichen Einrichtungskonzepts inkl. Leitfaden zur Umsetzung.\n' +
        'Aufgrund des überarbeiteten Moodboards erstelle ich das Konzept für deinen persönlichen „Raum für´s echte Leben".\n\n' +
        'Dies beinhaltet: \n' +
        '- Moodboard inkl. Farbkonzept \n' +
        '- Möblierungsplan \n' +
        '- Dekorationskonzept \n' +
        '- Wandgestaltung \n' +
        '- Einkaufsliste \n' +
        '- Guide zur Umsetzung \n\n' +
        'Optionale Zusatzleistungen: \n' +
        '3D-Ansichten - erste: 129€, jede weitere: 30€ \n' +
        'Renderings - je 30€'
    }
  ];
}
