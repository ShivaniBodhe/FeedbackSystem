import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionalComponent } from './select-optional.component';

describe('SelectOptionalComponent', () => {
  let component: SelectOptionalComponent;
  let fixture: ComponentFixture<SelectOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
