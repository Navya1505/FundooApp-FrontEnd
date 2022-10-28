import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpService) { }

  register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/register',data,false,header)
  }

  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'data'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/login', data, false, header)
  }


  forgetPassword(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'data'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/ForgetPassword?EmailId=navyachowdary1505%40gmail.com', data, false, header)
  }
}

