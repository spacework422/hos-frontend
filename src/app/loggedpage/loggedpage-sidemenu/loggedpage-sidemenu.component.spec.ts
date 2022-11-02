import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedpageSidemenuComponent } from './loggedpage-sidemenu.component';

describe('LoggedpageSidemenuComponent', () => {
  let component: LoggedpageSidemenuComponent;
  let fixture: ComponentFixture<LoggedpageSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedpageSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedpageSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
