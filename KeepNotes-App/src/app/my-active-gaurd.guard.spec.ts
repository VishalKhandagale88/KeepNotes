import { TestBed } from '@angular/core/testing';

import { MyActiveGaurdGuard } from './my-active-gaurd.guard';

describe('MyActiveGaurdGuard', () => {
  let guard: MyActiveGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyActiveGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
