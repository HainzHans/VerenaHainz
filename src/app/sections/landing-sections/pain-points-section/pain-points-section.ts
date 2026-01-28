import { Component } from '@angular/core';
import {CardComponent} from '../../../components/card-component/card-component';

@Component({
  selector: 'app-pain-points-section',
  imports: [
    CardComponent
  ],
  templateUrl: './pain-points-section.html',
  styleUrl: './pain-points-section.css',
})
export class PainPointsSection {

  painPoints: PainPoint[] = [
    {
      icon: 'category.svg',
      title: 'Es wirkt zusammengewürfelt?',
      text: 'Flohmarktfunde, Erbstücke und alte Lieblingsmöbel - viele verschiedene Möbel wirken oft zusammengewürfelt und unruhig. ' +
        'Das heißt aber nicht, dass alles raus muss. Melde dich für eine unverbindliche Einschätzung.'
    },
    {
      icon: 'help.svg',
      title: 'Irgendetwas fehlt?',
      text: 'Du kennst das Gefühl: Man schaut sich in einem Raum um und merkt, etwas fehlt hier. ' +
        'Oft helfen schon kleine Veränderungen, damit sich dein Raum endlich „ganz“ anfühlt und du dich entspannen und wohlfühlen kannst.'
    },
    {
      icon: 'person.svg',
      title: 'Keine Persönlichkeit?',
      text: 'Dein Raum fühlt sich nicht wirklich nach dir an? Das kann verschiedene Gründe haben. Gemeinsam finden wir heraus, was deinem Zuhause fehlt - ' +
        'und verwandeln es in einen Ort, der deine Persönlichkeit widerspiegelt.'
    },
  ]

}

export interface PainPoint {
  icon: string;
  title: string;
  text: string;
}
