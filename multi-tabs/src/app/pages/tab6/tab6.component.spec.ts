import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab6Component } from './tab6.component';

describe('Tab6Component', () => {
  let component: Tab6Component;
  let fixture: ComponentFixture<Tab6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
