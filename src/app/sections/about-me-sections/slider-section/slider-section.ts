import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  imports: [],
  templateUrl: './slider-section.html',
  styleUrl: './slider-section.css',
})
export class SliderSection {

  currentSlide = 0;

  slides = [
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'EXPERTISE',
      text: 'Als ausgebildete Visual Merchandiserin mit Interior Design Diplom, vereine ich professionelles Fachwissen mit praktischer Erfahrung.'
    },
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'ANTRIEB',
      text: 'Ich lebe für die Dankbarkeit meiner Kunden, die ich nach unserer Zusammenarbeit erfahren darf. ' +
        'Das ist das größte Kompliment für mich.'
    },
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'LEIDENSCHAFT',
      text: 'Ich habe schon als Kind in "Die Sims" Häuser eingerichtet und jede Wohnzeitschrift gelesen, ' +
        'die mir in die Finger gekommen ist.'
    },
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'ZIEL',
      text: 'Mein kleines Business vorantreiben und so vielen Menschen wie möglich zu deren "Raum für´s echte Leben" verhelfen.'
    },
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'WURZELN',
      text: 'Aktuell wohne ich in einer kleinen aber feinen Dachgeschosswohnung in meinem Heimatdorf im wunderschönen Alpenvorland.'
    },
    {
      image: 'assets/images/about-me/slider_img.jpg',
      title: 'AUTHENTISCH',
      text: 'Neben meiner Arbeit verbringe ich gerne Zeit mit meinem Partner, meiner Familie und Freunden. ' +
        'Am liebsten draußen beim Wandern, Klettern, Reiten, Snowboarden etc.'
    },
  ];


  goToSlide(index: number) {
    this.currentSlide = index;
  }

  touchStartX = 0;
  touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd() {
    const swipeDistance = this.touchStartX - this.touchEndX;

    // Mindest-Swipe-Distanz (damit kleine Bewegungen ignoriert werden)
    if (Math.abs(swipeDistance) < 50) return;

    if (swipeDistance > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

}
