/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersianCalendarService } from './persian-calendar.service';

describe('Service: PersianCalendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersianCalendarService]
    });
  });

  it('should ...', inject([PersianCalendarService], (service: PersianCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
