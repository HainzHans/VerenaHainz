import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import {SliderComponent} from '../../../components/slider-component/slider-component';

@Component({
  selector: 'app-project-display-section',
  imports: [NgStyle, SliderComponent],
  templateUrl: './project-display-section.html',
  styleUrl: './project-display-section.css',
})
export class ProjectDisplaySection {

  beforeImage = input<string>('');
  afterImage = input<string>('');
  firstSmallImage = input<string>('');
  secondSmallImage = input<string>('');
  title = input<string>('');
  text = input<string>('');

  layout = input<'left' | 'right'>('left');

  background = input<string>('');
}
