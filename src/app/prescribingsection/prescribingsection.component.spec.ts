import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribingsectionComponent } from './prescribingsection.component';

describe('PrescribingsectionComponent', () => {
  let component: PrescribingsectionComponent;
  let fixture: ComponentFixture<PrescribingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
