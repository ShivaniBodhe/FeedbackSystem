import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSemComponent } from './select-sem.component';

describe('SelectSemComponent', () => {
  let component: SelectSemComponent;
  let fixture: ComponentFixture<SelectSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
