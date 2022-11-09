import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaviewformComponent } from './pharmaviewform.component';

describe('PharmaviewformComponent', () => {
  let component: PharmaviewformComponent;
  let fixture: ComponentFixture<PharmaviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaviewformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
