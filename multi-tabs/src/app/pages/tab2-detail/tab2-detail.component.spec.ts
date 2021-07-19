import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2DetailComponent } from './tab2-detail.component';

describe('Tab2DetaiComponent', () => {
  let component: Tab2DetailComponent;
  let fixture: ComponentFixture<Tab2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2DetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
