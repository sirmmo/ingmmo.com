import { TestBed, inject } from '@angular/core/testing';

import { IngmmoService } from './ingmmo.service';

describe('IngmmoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngmmoService]
    });
  });

  it('should be created', inject([IngmmoService], (service: IngmmoService) => {
    expect(service).toBeTruthy();
  }));
});
