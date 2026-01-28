import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionLanding } from './hero-section-landing';

describe('HeroSectionLanding', () => {
  let component: HeroSectionLanding;
  let fixture: ComponentFixture<HeroSectionLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
