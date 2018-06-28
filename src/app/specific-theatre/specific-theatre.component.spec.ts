import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTheatreComponent } from './specific-theatre.component';

describe('SpecificTheatreComponent', () => {
  let component: SpecificTheatreComponent;
  let fixture: ComponentFixture<SpecificTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
