import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDisplaySection } from './project-display-section';

describe('ProjectDisplaySection', () => {
  let component: ProjectDisplaySection;
  let fixture: ComponentFixture<ProjectDisplaySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDisplaySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDisplaySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
