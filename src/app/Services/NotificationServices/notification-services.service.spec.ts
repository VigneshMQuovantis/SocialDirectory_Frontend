import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationServicesService } from './notification-services.service';

describe('NotificationServicesService', () => {
  let service: NotificationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    });
    service = TestBed.inject(NotificationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
