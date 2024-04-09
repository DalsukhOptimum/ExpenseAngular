import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllExpenseComponent } from './show-all-expense.component';


describe('ShowAllExpenseComponent', () => {
  let component: ShowAllExpenseComponent;
  let fixture: ComponentFixture<ShowAllExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
