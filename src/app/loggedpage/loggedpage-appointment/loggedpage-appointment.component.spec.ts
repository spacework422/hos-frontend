import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageAppointmentComponent } from './loggedpage-appointment.component';

describe('LoggedpageAppointmentComponent', () => {
  let component: LoggedpageAppointmentComponent;
  let fixture: ComponentFixture<LoggedpageAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedpageAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedpageAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
