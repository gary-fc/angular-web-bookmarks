import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMarkComponent } from './form-add-mark.component';

describe('FormAddMarkComponent', () => {
  let component: FormAddMarkComponent;
  let fixture: ComponentFixture<FormAddMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
