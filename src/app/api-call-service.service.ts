import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  Email!:string ;
  showalldata:boolean = true ;
  
  flag:boolean = false;
  constructor(private http: HttpClient) { }

  callMethod(url: string, data: object): any {
    return this.http.post(url, data).pipe();
  }

}
