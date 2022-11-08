import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmapanelComponent } from './pharmapanel.component';

describe('PharmapanelComponent', () => {
  let component: PharmapanelComponent;
  let fixture: ComponentFixture<PharmapanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmapanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmapanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
