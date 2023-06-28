import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketsUserComponent } from './book-tickets-user.component';

describe('BookTicketsUserComponent', () => {
  let component: BookTicketsUserComponent;
  let fixture: ComponentFixture<BookTicketsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTicketsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
