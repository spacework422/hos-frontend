import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsideComponent } from './doctorside.component';

describe('DoctorsideComponent', () => {
  let component: DoctorsideComponent;
  let fixture: ComponentFixture<DoctorsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
