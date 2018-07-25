import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideshareComponent } from './rideshare.component';

describe('RideshareComponent', () => {
  let component: RideshareComponent;
  let fixture: ComponentFixture<RideshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
