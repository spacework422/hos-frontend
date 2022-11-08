import { TestBed } from '@angular/core/testing';

import { HealthreportService } from './healthreport.service';

describe('HealthreportService', () => {
  let service: HealthreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
