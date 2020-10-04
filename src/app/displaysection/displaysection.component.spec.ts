import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysectionComponent } from './displaysection.component';

describe('DisplaysectionComponent', () => {
  let component: DisplaysectionComponent;
  let fixture: ComponentFixture<DisplaysectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
