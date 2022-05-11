/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IslemServiceService } from './islem.service';

describe('Service: IslemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IslemServiceService]
    });
  });

  it('should ...', inject([IslemServiceService], (service: IslemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
