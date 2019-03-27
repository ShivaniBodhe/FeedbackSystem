import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndFeedbackComponent } from './end-feedback.component';

describe('EndFeedbackComponent', () => {
  let component: EndFeedbackComponent;
  let fixture: ComponentFixture<EndFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
