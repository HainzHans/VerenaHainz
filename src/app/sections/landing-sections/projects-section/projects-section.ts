import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {NavigateToPageService} from '../../../services/navigate-to-page-service';

@Component({
  selector: 'app-projects-section',
  imports: [
    NgStyle
  ],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {


  constructor(private navigateToPageService: NavigateToPageService) {}

  projects: Project[] = [
    {
      title: 'FAMILIENKÜCHE',
      description: 'In Planung | Oberwarngau',
      img: 'assets/project/inProgress/inProgress.jpg',
      showDescription: false,
    },
    {
      title: 'SCHLAFZIMMER FÜR BERGLER',
      description: 'Makeover | Oberwarngau',
      img: 'assets/project/bergler/model_bergler_1.jpg',
      showDescription: false,
    },
    {
      title: 'COOLES JUGENDZIMMER',
      description: 'Makeover | Fiktiv',
      img: 'assets/project/schlafzimmer/model_schlafzimmer_landingpage_1.jpg',
      showDescription: false,
    },
    {
      title: 'WOHNZIMMER FÜR SAMMLER',
      description: 'Makeover | Fiktiv',
      img: 'assets/project/wohnzimmer/model_wohnzimmer_1.jpg',
      showDescription: false,
    },
  ]


  navigateToPage(page: string) {
    this.navigateToPageService.navigateToPage(page);
  }

}

export interface Project {
  img: string;
  title: string;
  description: string;
  showDescription: boolean,
}
