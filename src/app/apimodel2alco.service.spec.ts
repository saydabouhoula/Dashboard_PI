import { TestBed } from '@angular/core/testing';

import { Apimodel2alcoService } from './apimodel2alco.service';

describe('Apimodel2alcoService', () => {
  let service: Apimodel2alcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apimodel2alcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
