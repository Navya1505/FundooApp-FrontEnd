import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/httpservice.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token: any;
  NoteId:any;
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

  UpdateNotes(updateNote: any,NoteId: number) {
    console.log("aws",updateNote);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      }),
    }
    return this.httpService.putService('https://localhost:44382/api/Note/UpdateNotes?noteid='+NoteId, updateNote,true, header)
  }


  Archieve(data: any) {
  console.log("aws",data);
  console.log(this.token);

  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.httpService.putService('https://localhost:44382/api/Note/Archieve?NoteId='+data,null, true, header)
}
delete(data: any) {
  console.log(data);
   let header = {
    headers: new HttpHeaders({
      
      'Content-type': 'application/json',
      'Authorization' : 'Bearer '+ this.token,

    }),
  };
  return this.httpService.putService('https://localhost:44382/api/Note/Trash?NoteId='+data,null, true,header );
}
  

}
