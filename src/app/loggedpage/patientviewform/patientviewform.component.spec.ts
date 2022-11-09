import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientviewformComponent } from './patientviewform.component';

describe('PatientviewformComponent', () => {
  let component: PatientviewformComponent;
  let fixture: ComponentFixture<PatientviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientviewformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
