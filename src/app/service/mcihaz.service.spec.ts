/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { McihazService } from './mcihaz.service';

describe('Service: Mcihaz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McihazService]
    });
  });

  it('should ...', inject([McihazService], (service: McihazService) => {
    expect(service).toBeTruthy();
  }));
});
