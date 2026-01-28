import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-ref-section',
  imports: [],
  templateUrl: './customer-ref-section.html',
  styleUrl: './customer-ref-section.css',
})
export class CustomerRefSection {

  reference: Reference = {
    name: 'Christiane & Manfred',
    text: '„Wir wollten unser Schlafzimmer verändern, aber hatten keine genaue Vorstellung. ' +
      'Verena hat unsere Wünsche perfekt unter einen Hut gebracht und unsere Vorstellungen sogar übertroffen. ' +
      'Von der ersten Idee bis zum fertigen Konzept war sie kompetent und herzlich an unserer Seite. Jetzt freuen wir uns riesig darauf, ' +
      'unseren Raum genau so umzusetzen!” ',
  };

}
export interface Reference {
  name: string;
  text: string;
}
