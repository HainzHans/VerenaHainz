import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-checkpoint-section',
  imports: [
    MatIcon
  ],
  templateUrl: './checkpoint-section.html',
  styleUrl: './checkpoint-section.css',
})
export class CheckpointSection {

  checkpoints: Checkpoint[] = [
    {
      text: 'Ländlich ist nicht gleich altbacken',
    },
    {
      text: 'Modern ist nicht gleich steril',
    },
    {
      text: 'Mut zur Farbe zahlt sich aus',
    },
    {
      text: 'Pflanzen schenken Räumen Leben',
    },
    {
      text: 'Natürliche Materialien – Ja bitte!',
    },
    {
      text: 'Qualität vor Quantität',
    },
    {
      text: 'Qualität ist eine Investition in die Zukunft',
    },
    {
      text: 'Gegenstände, die du wirklich liebst, sind zeitlos',
    },
    {
      text: 'Gutes Design spart auf lange Sicht Zeit und Geld',
    },
    {
      text: 'Die Funktion von Design ist Design funktionieren zu lassen',
    },
  ]

}

export interface Checkpoint {
  text: string;
}
