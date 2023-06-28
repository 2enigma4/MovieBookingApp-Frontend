import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieUserComponent } from './view-movie-user.component';

describe('ViewMovieUserComponent', () => {
  let component: ViewMovieUserComponent;
  let fixture: ComponentFixture<ViewMovieUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMovieUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMovieUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
