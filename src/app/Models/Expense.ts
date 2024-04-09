export class Expense {
    Comment!: string;
    Email!:string;
    CreditOrDebit!:string;
    Amount!:number
  
    constructor(Comment:string,Email:string,CreditedOrDebite:string,Amount:number)
    {
 this.Amount = Amount ;
 this.Comment = Comment ;
 this.CreditOrDebit = CreditedOrDebite ;
 this.Email = Email ;
    }
  }