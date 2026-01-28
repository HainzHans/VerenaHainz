import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHeroSection } from './global-hero-section';

describe('GlobalHeroSection', () => {
  let component: GlobalHeroSection;
  let fixture: ComponentFixture<GlobalHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalHeroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
