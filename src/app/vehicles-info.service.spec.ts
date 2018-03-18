import { TestBed, inject } from '@angular/core/testing';

import { VehiclesInfoService } from './vehicles-info.service';

describe('VehiclesInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesInfoService]
    });
  });

  it('should be created', inject([VehiclesInfoService], (service: VehiclesInfoService) => {
    expect(service).toBeTruthy();
  }));
});
