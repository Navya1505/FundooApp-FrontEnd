import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  getNotes: any;
  noteArray: any;
constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.GetNotes().subscribe((response: any) => {
      console.log(response.data);  
      this.noteArray = response.data.reverse();
      this.noteArray = this.noteArray.filter((a: any) => {
        return a.archieve == false && a.trash == false;
      })
    })
    
  }
  receiveMessage($event: any) {
    console.log($event);
    this.getAllNote();
  }
  updatedicon($event:any) {
    console.log($event);
    this.getAllNote();
  }
  receiveMessagearchive($event:any){
    console.log($event);
    this.getAllNote();
  }
  iconRefresh($event:any){
    console.log($event)
    this.getAllNote();
  }
}

