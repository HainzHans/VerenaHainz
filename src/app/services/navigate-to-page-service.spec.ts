import { TestBed } from '@angular/core/testing';

import { NavigateToPageService } from './navigate-to-page-service';

describe('NavigateToPageService', () => {
  let service: NavigateToPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateToPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
