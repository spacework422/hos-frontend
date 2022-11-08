import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpharmadetailsComponent } from './adminpharmadetails.component';

describe('AdminpharmadetailsComponent', () => {
  let component: AdminpharmadetailsComponent;
  let fixture: ComponentFixture<AdminpharmadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpharmadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpharmadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
