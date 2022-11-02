import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorregistrationComponent } from './admin-doctorregistration.component';

describe('AdminDoctorregistrationComponent', () => {
  let component: AdminDoctorregistrationComponent;
  let fixture: ComponentFixture<AdminDoctorregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoctorregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDoctorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
