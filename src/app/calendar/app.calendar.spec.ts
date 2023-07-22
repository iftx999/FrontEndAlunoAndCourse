import { TestBed } from '@angular/core/testing';
import { AppCalendar } from './app.calendar';

describe('AppCalendar', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppCalendar]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCalendar);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
