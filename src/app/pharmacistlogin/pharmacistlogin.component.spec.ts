import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistloginComponent } from './pharmacistlogin.component';

describe('PharmacistloginComponent', () => {
  let component: PharmacistloginComponent;
  let fixture: ComponentFixture<PharmacistloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
