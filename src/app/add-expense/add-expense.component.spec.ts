import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseComponent } from './add-expense.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpenseComponent ],
      imports: [ReactiveFormsModule]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
