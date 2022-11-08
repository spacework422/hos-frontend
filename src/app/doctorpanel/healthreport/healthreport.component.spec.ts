import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthreportComponent } from './healthreport.component';

describe('HealthreportComponent', () => {
  let component: HealthreportComponent;
  let fixture: ComponentFixture<HealthreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
