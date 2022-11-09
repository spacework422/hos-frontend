import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedDrugComponent } from './logged-drug.component';

describe('LoggedDrugComponent', () => {
  let component: LoggedDrugComponent;
  let fixture: ComponentFixture<LoggedDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedDrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
