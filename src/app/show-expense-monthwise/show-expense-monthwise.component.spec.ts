import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExpenseMonthwiseComponent } from './show-expense-monthwise.component';

describe('ShowExpenseMonthwiseComponent', () => {
  let component: ShowExpenseMonthwiseComponent;
  let fixture: ComponentFixture<ShowExpenseMonthwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExpenseMonthwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExpenseMonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
