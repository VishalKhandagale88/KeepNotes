import { TestBed } from '@angular/core/testing';

import { CheckPagesLeavingGuard } from './check-pages-leaving.guard';

describe('CheckPagesLeavingGuard', () => {
  let guard: CheckPagesLeavingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckPagesLeavingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
