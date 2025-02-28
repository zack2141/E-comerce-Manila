import { TestBed } from '@angular/core/testing';

import { SevicioAPIService } from './sevicio-api.service';

describe('SevicioAPIService', () => {
  let service: SevicioAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevicioAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
