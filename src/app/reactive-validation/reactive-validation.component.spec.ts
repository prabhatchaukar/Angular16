import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidationComponent } from './reactive-validation.component';

describe('ReactiveValidationComponent', () => {
  let component: ReactiveValidationComponent;
  let fixture: ComponentFixture<ReactiveValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveValidationComponent]
    });
    fixture = TestBed.createComponent(ReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
