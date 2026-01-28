import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  input,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-service-display-section',
  templateUrl: './service-display-section.html',
  styleUrl: './service-display-section.css',
})
export class ServiceDisplaySection implements AfterViewInit {

  @ViewChildren('panelRef') panelRefs!: QueryList<ElementRef>;

  title = input<string>('');
  intro = input<string>('');
  image = input<string>('');
  panels = input<{ id: number; title: string; content: string }[]>([]);
  showLine = input<boolean>(false);

  openPanels: Set<number> = new Set();
  panelHeights: Record<number, number> = {};

  ngOnInit() {
    // Erstes Panel öffnen
    if (this.panels().length > 0) {
      this.openPanels.add(this.panels()[0].id);
    }
  }

  ngAfterViewInit() {
    // Nach dem ersten Rendern einmal Höhen messen
    setTimeout(() => this.measureHeights());
  }

  private measureHeights() {
    this.panelRefs.forEach((ref, index) => {
      const id = this.panels()[index].id;
      this.panelHeights[id] = ref.nativeElement.scrollHeight;
    });
  }

  togglePanel(id: number) {
    const isOpen = this.openPanels.has(id);

    // Alles schließen
    this.openPanels.clear();

    if (!isOpen) {
      // Panel öffnen
      this.openPanels.add(id);

      // DOM aktualisieren lassen → dann Höhe messen
      setTimeout(() => this.measureHeights());
    }
  }
}
