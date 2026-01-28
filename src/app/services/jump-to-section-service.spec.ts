import { TestBed } from '@angular/core/testing';

import { JumpToSectionService } from './jump-to-section-service';

describe('JumpToSectionService', () => {
  let service: JumpToSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JumpToSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
