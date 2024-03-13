import { TestBed } from '@angular/core/testing';

import { LitsService } from './lits.service';

describe('LitsService', () => {
  let service: LitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
