import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ShowExpenseMonthwiseComponent } from './show-expense-monthwise/show-expense-monthwise.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { ShowAllExpenseComponent } from './show-all-expense/show-all-expense.component';
import { DatewiseComponent } from './datewise/datewise.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    AddExpenseComponent,
    ShowExpenseMonthwiseComponent,
    UserDashBoardComponent,
    ShowAllExpenseComponent,
    DatewiseComponent,
    HeaderComponent,
    FooterComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
