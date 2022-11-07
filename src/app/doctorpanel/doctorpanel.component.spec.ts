import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpanelComponent } from './doctorpanel.component';

describe('DoctorpanelComponent', () => {
  let component: DoctorpanelComponent;
  let fixture: ComponentFixture<DoctorpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
