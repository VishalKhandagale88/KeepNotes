import { TestBed } from '@angular/core/testing';

import { LogInsService } from './log-ins.service';

describe('LogInsService', () => {
  let service: LogInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
