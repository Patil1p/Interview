import { TestBed } from '@angular/core/testing';

import { LogindatabaseService } from './logindatabase.service';

describe('LogindatabaseService', () => {
  let service: LogindatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
