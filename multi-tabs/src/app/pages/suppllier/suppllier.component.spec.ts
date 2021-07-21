import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppllierComponent } from './suppllier.component';

describe('SuppllierComponent', () => {
  let component: SuppllierComponent;
  let fixture: ComponentFixture<SuppllierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppllierComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppllierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
