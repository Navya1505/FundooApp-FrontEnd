import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/Register',data,false,header)
  }

  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/Login', data, false, header)
  }


  forgetPassword(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.http.postService('https://localhost:44382/api/User/ForgetPassword?', data, false, header)
  }
}

