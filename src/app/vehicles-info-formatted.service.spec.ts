import { TestBed, inject } from '@angular/core/testing';

import { VehiclesInfoFormattedService } from './vehicles-info-formatted.service';

describe('VehiclesInfoFormattedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesInfoFormattedService]
    });
  });

  it('should be created', inject([VehiclesInfoFormattedService], (service: VehiclesInfoFormattedService) => {
    expect(service).toBeTruthy();
  }));
});
