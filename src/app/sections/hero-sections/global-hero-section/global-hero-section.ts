import {Component, input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-global-hero-section',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './global-hero-section.html',
  styleUrl: './global-hero-section.css',
})
export class GlobalHeroSection {

  backgroundImage = input<HeroType>(HeroType.aboutMe);

  line1 = input<string>('');
  line2 = input<string>('');
  line3 = input<string>('');
  line4 = input<string>('');

  get heroClass(): string {
    return `hero-${this.backgroundImage()}`;
  }

}

export enum HeroType {
  aboutMe = 'aboutMe',
  project = 'project',
  service = 'service',
}
