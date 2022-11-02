import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpagePrescriptionComponent } from './loggedpage-prescription.component';

describe('LoggedpagePrescriptionComponent', () => {
  let component: LoggedpagePrescriptionComponent;
  let fixture: ComponentFixture<LoggedpagePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedpagePrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedpagePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
