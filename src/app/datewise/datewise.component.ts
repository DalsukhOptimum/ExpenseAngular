import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { ApiCallServiceService } from '../api-call-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowExpenseMonthwiseComponent } from '../show-expense-monthwise/show-expense-monthwise.component';
import { ShowAllExpenseComponent } from '../show-all-expense/show-all-expense.component';



@Component({
  selector: 'app-datewise',
  templateUrl: './datewise.component.html',
  styleUrls: ['./datewise.component.css'],
})
export class DatewiseComponent {
  userForm: any;
  Message!:any;
  Flag:boolean= false ;
  startDate!:any;
  endDate!:any;
  submitted  = false ; 
  invalid = false ;
  dataOfDay:any;
  CreditOrDebit:string = ""  ;

      constructor(private service:ApiCallServiceService,private router:Router,private formBuilder: FormBuilder)
      {
         
         
       
    this.Flag = this.service.flag ;

    if(!this.Flag)
    {
      this.router.navigate(["/"]);
    }
      //  this.Email = this.route.snapshot.paramMap.get('Id')?.slice(1)!;
       
        

      }

      ngOnInit(): void {

        this.userForm = this.formBuilder.group({
          startDate:  ['', Validators.required],
          endDate: ['', Validators.required],
          CreditOrDebit :[]
      
        });
        
       
      }

      submitForm()
      {
        
        try{
        //  this.monthly!.showDataflag = false ;
          //this.alldata!.allDataFlag = false;
        }
        catch(e)
        {
          console.log("error aave chhe tya j");
        }
    
       //  this.alldata.allDataFlag = false ;
        this.Message = null ;
        this.dataOfDay = null;
         this.submitted = true ;

         if (this.userForm?.valid){

        //  if(!(document.getElementById("startDate") as HTMLInputElement).value || !(document.getElementById("endDate") as HTMLInputElement))
        // {
        //   this.invalid = true ;
        //   return ;
        // }
       
        // this.startDate=  (document.getElementById("startDate") as HTMLInputElement).value;
        // this.endDate=  (document.getElementById("endDate") as HTMLInputElement).value;

        if((document.getElementById("CreditOrDebit") as HTMLInputElement).value)
        {
          this.CreditOrDebit = (document.getElementById("CreditOrDebit") as HTMLInputElement).value;
        }
        
   let obj = 
    {
    Email:this.service.Email,Flag:'Daywise',
    startDate:this.userForm.value.startDate,
    endDate:this.userForm.value.endDate,
    creditOrDebit:(this.CreditOrDebit)?this.CreditOrDebit:null
    }
        
        
          
        this.service.callMethod('https://localhost:44315/api/ExpenseManager/ShowAllExpense',obj).subscribe(
          {
           next: (data:any)=>{
             if(data.ID != 0)
             {
                 
                console.log(data.ID);
                // this.router.navigateByUrl(`/DashBoard?Id=${data.ID}`);
                this.dataOfDay = data.ArrayOfResponse;

                this.dataOfDay.map((obj:any) =>{
                  if(obj.CreditOrDebit == "C")
                  {
                    obj.CreditOrDebit = "Credit";
                  }
                  if(obj.CreditOrDebit == "D")
                  {
                    obj.CreditOrDebit = "Debit";
                  }
                });
               
           
                // this.MontlyData.map((obj:any) =>{
                //   obj.Month =new Date(2000,obj.Month,2);
                // });
                this.userForm.reset();
                this.submitted = false ;
             }
    
             else{
               this.Message = data.Message;
               this.userForm.reset();
               this.submitted = false ;
             }
           },
           Error:(err:Error)=>
           {
             window.alert("ENTER VALID credetails");
             this.userForm.reset();
             this.submitted = false ;
            
           }
           
          }
           );

          
      }
    }
}
