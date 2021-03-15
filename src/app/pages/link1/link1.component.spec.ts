import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1Component } from './link1.component';

describe('Link1Component', () => {
  let component: Link1Component;
  let fixture: ComponentFixture<Link1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
