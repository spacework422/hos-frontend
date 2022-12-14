import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraltestComponent } from './generaltest.component';

describe('GeneraltestComponent', () => {
  let component: GeneraltestComponent;
  let fixture: ComponentFixture<GeneraltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraltestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
