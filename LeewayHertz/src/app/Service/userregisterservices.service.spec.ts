import { TestBed } from '@angular/core/testing';

import { UserregisterservicesService } from './userregisterservices.service';

describe('UserregisterservicesService', () => {
  let service: UserregisterservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserregisterservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
