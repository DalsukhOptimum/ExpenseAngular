import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseComponent } from './datewise.component';

describe('DatewiseComponent', () => {
  let component: DatewiseComponent;
  let fixture: ComponentFixture<DatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
