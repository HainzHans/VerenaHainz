import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.html',
  styleUrl: './slider-component.css',
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('beforeWrapper') beforeWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('handle') handle!: ElementRef<HTMLSpanElement>;

  @Input() beforeImage = '';
  @Input() afterImage = '';

  beforeWidth = 0;
  dragging = false;
  isTouch = window.matchMedia('(pointer: coarse)').matches;

  ngAfterViewInit() {
    const rect = this.wrapper.nativeElement.getBoundingClientRect();
    setTimeout(() => {
      this.beforeWidth = rect.width / 2;
    });
  }

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.dragging = true;
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDrag() {
    this.dragging = false;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    const rect = this.wrapper.nativeElement.getBoundingClientRect();
    const x = this.isTouch
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;

    let newWidth = x - rect.left;
    newWidth = Math.max(0, Math.min(rect.width, newWidth));

    this.beforeWidth = newWidth;
  }
}
