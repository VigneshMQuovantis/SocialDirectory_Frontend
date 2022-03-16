import { TestBed } from '@angular/core/testing';

import { NotificationDataServiceService } from './notification-data-service.service';

describe('NotificationDataServiceService', () => {
  let service: NotificationDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
