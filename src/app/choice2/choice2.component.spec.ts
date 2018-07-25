import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Choice2Component } from './choice2.component';

describe('Choice2Component', () => {
  let component: Choice2Component;
  let fixture: ComponentFixture<Choice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Choice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Choice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
