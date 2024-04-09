import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiCallServiceService} from '../api-call-service.service';
import { ConnectableObservable } from 'rxjs';
import { Router, ɵafterNextNavigation } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: any;
  Message:any;
  submitted = false ;


  constructor(private formBuilder: FormBuilder,private service:ApiCallServiceService,private router:Router) {
    this.service.flag = false;
  }

  ngOnInit(): void {
    console.log("here i am ");
    this.userForm = this.formBuilder.group({
      
      Email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', Validators.required],
      
    });
    console.log("i am also at end");
  }

  submitForm(): void {
    console.log("i am in submit form");
    this.submitted = true ;
    let myError:any ;
    if (this.userForm?.valid)
     {
   //   console.log('Form data:', this.userForm.value);
      //this.http.post('https://localhost:44315/api/ExpenseManager/RegisterUser',this.userForm.value).subscribe((data)=>console.log(data));

      this.service.callMethod('https://localhost:44315/api/ExpenseManager/Login',this.userForm.value).subscribe(
       {
        next: (data:any)=>{
          if(data.ID != 0)
          {
            this.Message = data.Message;
             console.log(data.ID);
             // this.router.navigateByUrl(`/DashBoard?Id=${data.ID}`);
            //  this.router.navigate(["/DashBoard"], {
            //   queryParams: {Id: data.Message }
            // });
            this.service.Email =  data.Message;
            this.service.flag= true ;
            this.userForm.reset();
            this.submitted = false ;
          
            this.router.navigate(["/DashBoard"]);
            
          }
          else{
            this.Message = data.Message;
          }
        },
        Error:(err:Error)=>
        {
          window.alert("ENTER VALID credetails");
          this.userForm.reset(this.userForm.value);
          this.userForm.reset();
            this.submitted = false ;
          
        }
        
       }
        );
    }
  }

}
