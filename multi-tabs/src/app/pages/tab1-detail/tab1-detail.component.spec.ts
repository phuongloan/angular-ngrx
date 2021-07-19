import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1DetailComponent } from './tab1-detail.component';

describe('Tab1DetailComponent', () => {
  let component: Tab1DetailComponent;
  let fixture: ComponentFixture<Tab1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
