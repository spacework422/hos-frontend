import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmasistregistrationComponent } from './admin-pharmasistregistration.component';

describe('AdminPharmasistregistrationComponent', () => {
  let component: AdminPharmasistregistrationComponent;
  let fixture: ComponentFixture<AdminPharmasistregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPharmasistregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPharmasistregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
