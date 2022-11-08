import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasideComponent } from './pharmaside.component';

describe('PharmasideComponent', () => {
  let component: PharmasideComponent;
  let fixture: ComponentFixture<PharmasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
