import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideshareInputComponent } from './rideshare-input.component';

describe('RideshareInputComponent', () => {
  let component: RideshareInputComponent;
  let fixture: ComponentFixture<RideshareInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideshareInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideshareInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
