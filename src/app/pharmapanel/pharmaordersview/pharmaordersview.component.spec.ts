import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaordersviewComponent } from './pharmaordersview.component';

describe('PharmaordersviewComponent', () => {
  let component: PharmaordersviewComponent;
  let fixture: ComponentFixture<PharmaordersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaordersviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaordersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
