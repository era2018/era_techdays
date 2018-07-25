import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideShareGoComponent } from './ride-share-go.component';

describe('RideShareGoComponent', () => {
  let component: RideShareGoComponent;
  let fixture: ComponentFixture<RideShareGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideShareGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideShareGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
