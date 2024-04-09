import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiCallServiceService} from '../api-call-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Expense } from '../Models/Expense';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  userForm: any;
  Message:any;
  Id!:number;
  ex!:Expense
  Flag:boolean= false ;
  submitetd = false ;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private service:ApiCallServiceService,private route:ActivatedRoute,private router:Router) 
  {
    this.Flag = this.service.flag ;

    if(!this.Flag)
    {
      this.router.navigate(["/Home"]);
    }
  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      Comment: ['', Validators.required],
      Amount: ['', Validators.required],
      CreditOrDebit: ['', Validators.required],
      Email:String
    });
    
   
  }

   
  submitForm(): void {
    this.submitetd = true ;
    console.log("i am in submit form");

    //this.userForm.Email = this.route.snapshot.paramMap.get('Id')?.slice(1)!;
  //   console.log(this.route.snapshot.paramMap.get('Id'));
  //   console.log(this.userForm.value);
  // console.log( this.route.snapshot.paramMap.get('Id')?.slice(1));
  //    this.Ex.Amount = this.userForm.Amount;
  //    this.Ex.Comment = this.userForm.Comment;
  //    this.Ex.CreditOrDebit = this.userForm.CreditOrDebit;
    // this.Ex.Email=  this.route.snapshot.paramMap.get('Id')?.slice(1);
  //   console.log( this.route.snapshot.paramMap.get('Id')?.slice(1));
  //  this.ex.Comment = this.userForm.Comment;
  //  this.ex.Amount = this.userForm.Amount ;
  //   this.ex.CreditOrDebit = this.userForm.CreditOrDebit ;
  //   this.ex.Email = this.route.snapshot.paramMap.get('Id')?.slice(1)!;

   

console.log(this.userForm);
const ex = new Expense(
  this.userForm.value.Comment,
  // this.route.snapshot.paramMap.get('Id')?.slice(1)!,
  this.service.Email,
  this.userForm.controls.CreditOrDebit.value,
  this.userForm.controls.Amount.value,
) 
  


   if (this.userForm?.valid) {
  
   //   console.log('Form data:', this.userForm.value);
      //this.http.post('https://localhost:44315/api/ExpenseManager/RegisterUser',this.userForm.value).subscribe((data)=>console.log(data));
     this.service.callMethod('https://localhost:44315/api/ExpenseManager/AddExpense',ex).subscribe(
      {
       next: (data:any)=>{
       
         
           this.Message = data.Message;
           this.userForm.reset();
           this.submitetd = false ;
         
       },
       Error:(err:Error)=>
       {
         window.alert("ENTER VALID credetails");
         this.userForm.reset(this.userForm.value);
         this.userForm.reset();
           this.submitetd = false ;
       }
       
      }
       );
      
    }
  }


}
