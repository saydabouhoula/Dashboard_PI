import { TestBed } from '@angular/core/testing';

import { SpoulaService } from './spoula.service';

describe('SpoulaService', () => {
  let service: SpoulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
