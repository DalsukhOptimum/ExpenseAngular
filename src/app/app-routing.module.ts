import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ShowExpenseMonthwiseComponent } from './show-expense-monthwise/show-expense-monthwise.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { ShowAllExpenseComponent } from './show-all-expense/show-all-expense.component';
import { AppComponent } from './app.component';
import { DatewiseComponent } from './datewise/datewise.component';

const routes: Routes = [
{ 
  component:LoginComponent,
  path:'login'
},

{
  component:UserRegistrationComponent,
  path:'Register'
},

{
  component:AddExpenseComponent,
  path:'DashBoard/AddExpense'
},

{
  component:ShowExpenseMonthwiseComponent,
  path:'DashBoard/Monthwise'
},

{
  component:UserDashBoardComponent,
  path:'DashBoard'
},

{
  component:ShowAllExpenseComponent,
  path:'DashBoard/ShowAllExpense'
},

{
  component:DatewiseComponent,
  path:'DashBoard/Datewise'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
