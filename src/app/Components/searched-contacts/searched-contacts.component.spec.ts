import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedContactsComponent } from './searched-contacts.component';

describe('SearchedContactsComponent', () => {
  let component: SearchedContactsComponent;
  let fixture: ComponentFixture<SearchedContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
