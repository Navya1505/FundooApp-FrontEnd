import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }

  postService(url:string,data:any,token:boolean=false,options:any){

    return this.httpclient.post(url,data,token && options)
  }
}
