import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiCallServiceService } from '../api-call-service.service';
import { ExpenseServiceService } from '../expense-service.service';
import {faCalendarPlus,faUpload,faHome,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css'],
  
})
export class UserDashBoardComponent {


  Icon = faCalendarPlus;
  uploadIcon = faUpload ;
  DashboardIcon = faHome;
  calanderIcon = faCalendarAlt ;

  Flag:boolean= false ;
  constructor( public serviceexpense:ExpenseServiceService, private router :Router,private route:ActivatedRoute) {
  
  }
  ngOnInit():void{
   
    this.serviceexpense.ComponentName = "default";
  }


  
}
