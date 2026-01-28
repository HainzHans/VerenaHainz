import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainPointsSection } from './pain-points-section';

describe('PainPointsSection', () => {
  let component: PainPointsSection;
  let fixture: ComponentFixture<PainPointsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainPointsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainPointsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
