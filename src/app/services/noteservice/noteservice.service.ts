import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }
  CreateNotes(data: any) {
    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('https://localhost:44382/api/Note/Create', data, true, header)
  }

  GetNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Note/GetNotes',true,header)
  }
}