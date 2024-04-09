import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiCallServiceService } from '../api-call-service.service';

@Component({
  selector: 'app-show-expense-monthwise',
  templateUrl: './show-expense-monthwise.component.html',
  styleUrls: ['./show-expense-monthwise.component.css']
})
export class ShowExpenseMonthwiseComponent {
   
  //Email!:string ;
  Message:any;
 public showDataflag = true;
  MontlyData:any
  Flag:boolean= false ;
  MonthName = ['January','February','March','April','May','June','July','August','septmber','october','november','December'];
  constructor(private route:ActivatedRoute,private service:ApiCallServiceService,private router:Router)
  {
    this.Flag = this.service.flag ;
  
    if(!this.Flag)
    {
      this.router.navigate(["/"]);
    }
       //this.Email = this.route.snapshot.paramMap.get('Id')?.slice(1)!;
       this.service.callMethod('https://localhost:44315/api/ExpenseManager/showMonthlyExpense',{Email:this.service.Email}).subscribe(
        {
         next: (data:any)=>{
           if(data.ID != 0)
           {
        
              console.log(data.ID);
              // this.router.navigateByUrl(`/DashBoard?Id=${data.ID}`);
              this.MontlyData = data.ArrayOfResponse;
              // this.MontlyData.map((obj:any) =>{
              //   obj.Month =new Date(2000,obj.Month,2);
              // });
           }
  
           else{
             this.Message = data.Message;
           }
         },
         Error:(err:Error)=>
         {
           window.alert("ENTER VALID credetails");
          
         }
         
        }
         );
  }
  
 // 

}
