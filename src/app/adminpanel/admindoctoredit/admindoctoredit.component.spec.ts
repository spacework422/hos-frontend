import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctoreditComponent } from './admindoctoredit.component';

describe('AdmindoctoreditComponent', () => {
  let component: AdmindoctoreditComponent;
  let fixture: ComponentFixture<AdmindoctoreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindoctoreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindoctoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
