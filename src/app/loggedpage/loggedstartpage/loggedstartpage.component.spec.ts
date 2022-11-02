import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedstartpageComponent } from './loggedstartpage.component';

describe('LoggedstartpageComponent', () => {
  let component: LoggedstartpageComponent;
  let fixture: ComponentFixture<LoggedstartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedstartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedstartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
