/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DurumService } from './durum.service';

describe('Service: Durum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DurumService]
    });
  });

  it('should ...', inject([DurumService], (service: DurumService) => {
    expect(service).toBeTruthy();
  }));
});
