import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiCallServiceService } from '../api-call-service.service';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css'],
  
})
export class UserDashBoardComponent {

  Flag:boolean= false ;
  constructor( private service:ApiCallServiceService, private router :Router,private route:ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   this.Id = params['Id'];
    //   console.log(this.Id);
    // });

  //   this.route.queryParams.subscribe(params => {
  //     this.Id = params['Id'];
  // });
 
        this.Flag = this.service.flag ;

        if(!this.Flag)
        {
          this.router.navigate(["/"]);
        }

  }


  
}
