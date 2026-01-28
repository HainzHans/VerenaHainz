import { Routes } from '@angular/router';
import {ImpressumPage} from './pages/impressum-page/impressum-page';
import {DataPrivacyPage} from './pages/data-privacy-page/data-privacy-page';
import {AgbPage} from './pages/agb-page/agb-page';
import {LandingPage} from './pages/landing-page/landing-page';
import {AboutMePage} from './pages/about-me-page/about-me-page';
import {ProjectPage} from './pages/project-page/project-page';
import {ServicePage} from './pages/service-page/service-page';

export const routes: Routes = [
  {path: 'home', component: LandingPage},
  {path: 'about', component: AboutMePage},
  {path: 'project', component: ProjectPage},
  {path: 'service', component: ServicePage},
  {path: 'impressum', component: ImpressumPage},
  {path: 'data-privacy', component: DataPrivacyPage},
  {path: 'agb', component: AgbPage},
  {path: '**', redirectTo: 'home' },
];
