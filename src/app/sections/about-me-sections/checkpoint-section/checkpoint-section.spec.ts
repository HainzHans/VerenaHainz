import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointSection } from './checkpoint-section';

describe('CheckpointSection', () => {
  let component: CheckpointSection;
  let fixture: ComponentFixture<CheckpointSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckpointSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckpointSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
