import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewformComponent } from './doctorviewform.component';

describe('DoctorviewformComponent', () => {
  let component: DoctorviewformComponent;
  let fixture: ComponentFixture<DoctorviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorviewformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
