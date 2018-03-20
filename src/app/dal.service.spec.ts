import { TestBed, inject } from '@angular/core/testing';

import { DalService } from './dal.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DalService]
    });
  });

  it('should be created', inject([DalService], (service: DalService) => {
    expect(service).toBeTruthy();
  }));
});
