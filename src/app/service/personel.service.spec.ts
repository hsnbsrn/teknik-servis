/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonelService } from './personel.service';

describe('Service: Personel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonelService]
    });
  });

  it('should ...', inject([PersonelService], (service: PersonelService) => {
    expect(service).toBeTruthy();
  }));
});
