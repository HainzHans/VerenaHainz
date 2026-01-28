import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingPage} from './pages/landing-page/landing-page';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, MatFormField, MatInput, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Verena Hainz');
  v = ''
  d = '12344321'
}
